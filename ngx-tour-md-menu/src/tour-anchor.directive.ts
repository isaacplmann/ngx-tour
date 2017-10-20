import { ComponentFactoryResolver, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { IStepOption, TourAnchorDirective, TourService, TourState } from 'ngx-tour-core';
import { Subscription } from 'rxjs/Rx';
import withinviewport from 'withinviewport';

import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { TourStepTemplateService } from './tour-step-template.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorMatMenuDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  public opener: TourAnchorOpenerComponent;
  public menuCloseSubscription: Subscription;

  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector,
    private viewContainer: ViewContainerRef,
    private element: ElementRef,
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService,
  ) {
    this.opener = this.viewContainer.createComponent(
      this.componentFactoryResolver.resolveComponentFactory(TourAnchorOpenerComponent)
    ).instance;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.tourStepTemplate.templateComponent.step = step;
    // Ignore step.placement
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
    (<any>this.opener.trigger)._element = this.element;
    this.opener.trigger.menu = this.tourStepTemplate.templateComponent.tourStep;
    this.opener.trigger.ngAfterContentInit();
    this.opener.trigger.openMenu();
    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }
    this.menuCloseSubscription = this.opener.trigger.onMenuClose.first().subscribe(event => {
      if (this.tourService.getStatus() !== TourState.OFF) {
        this.tourService.end();
      }
    });
  }

  public hideTourStep(): void {
    if (this.menuCloseSubscription) {
      this.menuCloseSubscription.unsubscribe();
    }
    this.opener.trigger.closeMenu();
  }
}
