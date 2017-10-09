import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { ComponentFactoryResolver, Directive, ElementRef, Injector, Input, OnDestroy, OnInit, ViewContainerRef } from '@angular/core';
import { MatMenuTrigger } from '@angular/material';
import { IStepOption, TourAnchorDirective, TourService } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';
import { TourState } from './public_api';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorMatMenuDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  public opener: TourAnchorOpenerComponent;

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
    console.log('showTourStep', step);
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
    this.opener.trigger.openMenu();
    this.opener.trigger.onMenuClose.first().subscribe(event => {
      console.log(event, step);
      if (this.tourService.getStatus() !== TourState.OFF) {
        this.tourService.end();
      }
    });
  }

  public hideTourStep(): void {
    console.log('hideTourStep', this.opener.trigger);
    this.opener.trigger.closeMenu();
  }
}
