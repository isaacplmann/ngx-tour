import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  HostBinding,
  Injector,
  Input,
  OnDestroy,
  OnInit,
  ViewContainerRef
} from '@angular/core';
import {
  TourAnchorDirective,
  TourState
} from 'ngx-tour-core';
import { Subscription } from 'rxjs';
import withinviewport from 'withinviewport';

import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { first } from 'rxjs/operators';
import { TourBackdropService } from './tour-backdrop.service';
import { INgxmStepOption as IStepOption } from './step-option.interface';
import { NgxmTourService } from './ngx-md-menu-tour.service';

@Directive({
  selector: '[tourAnchor]'
})
export class TourAnchorMatMenuDirective
  implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  public opener: TourAnchorOpenerComponent;
  public menuCloseSubscription: Subscription;

  @HostBinding('class.touranchor--is-active') public isActive: boolean;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainer: ViewContainerRef,
    private element: ElementRef,
    private tourService: NgxmTourService,
    private tourStepTemplate: TourStepTemplateService,
    private tourBackdrop: TourBackdropService
  ) {
    this.opener = this.viewContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(
        TourAnchorOpenerComponent
      )
    ).instance;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.isActive = true;
    this.tourStepTemplate.templateComponent.step = step;
    // Ignore step.placement
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (this.element.nativeElement as HTMLElement).scrollIntoView(false);
      } else if (
        !withinviewport(this.element.nativeElement, { sides: 'left top right' })
      ) {
        (this.element.nativeElement as HTMLElement).scrollIntoView(true);
      }
    }
    (this.opener.trigger as any)._element = this.element;
    this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
    this.opener.trigger.ngAfterContentInit();
    this.opener.trigger.openMenu();

    step.enableBackdrop = (step.toClick && !step.enableBackdrop) ? true : step.enableBackdrop;

    if (step.enableBackdrop) {
      this.tourBackdrop.show(this.element);
    } else {
      this.tourBackdrop.close();
    }

    if (step.toClick) {
      console.log('Click anywhere to go to the next step.');
      // TODO Snackbar / Toast with 'Click anywhere to go to the next step' so the User knows
    }

    step.prevBtnTitle = step.prevBtnTitle || 'Prev';
    step.nextBtnTitle = step.nextBtnTitle || 'Next';
    step.endBtnTitle = step.endBtnTitle || 'End';

    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }

    // When the next step is called, if a toClick was defined force click it.
    // Works for buttons, links, etc if you provide the right element, otherwise just go to next step
    this.tourService.stepShow$
      .pipe(first())
      .subscribe(() => {
        if (step.toClick) {
          // If user provided String, queryselect it, otherwise just save the HTMLElement
          const element: HTMLElement = (typeof step.toClick === 'string')
            ? document.querySelector(step.toClick) as HTMLElement
            : step.toClick as HTMLElement;

          if (!element) {
            console.error('Element toClick not found: ', step.toClick);
          } else {
            element.click();
          }
        }
      });

    this.menuCloseSubscription = this.opener.trigger.menuClosed
      .pipe(first())
      .subscribe(() => {
        if (step.toClick) {
          // If user provided String, queryselect it, otherwise just save the HTMLElement
          const element: HTMLElement = (typeof step.toClick === 'string')
            ? document.querySelector(step.toClick) as HTMLElement
            : step.toClick as HTMLElement;

          if (!element) {
            console.error('Element toClick not found: ', step.toClick);
          } else {
            element.click();
          }
          this.tourService.callback$.next(step);
          this.tourService.next();
        } else {
          if (this.tourService.getStatus() !== TourState.OFF) {
            this.tourService.end();
          }
        }
        this.tourBackdrop.close();
      });
    // Reload and align backdrop on window resize
    window.addEventListener('resize', () => {
      this.tourBackdrop.close();
      if (!step.preventScrolling) {
        if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
          (this.element.nativeElement as HTMLElement).scrollIntoView(false);
        } else if (
          !withinviewport(this.element.nativeElement, { sides: 'left top right' })
        ) {
          (this.element.nativeElement as HTMLElement).scrollIntoView(true);
        }
      }
      if (step.enableBackdrop && this.tourService.getStatus() === TourState.ON) {
        this.tourBackdrop.show(this.element);
      }
    });
  }

  public hideTourStep(): void {
    this.isActive = false;
    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }
    this.opener.trigger.closeMenu();
    if (this.tourService.getStatus() === TourState.OFF) {
      this.tourBackdrop.close();
    }
  }
}
