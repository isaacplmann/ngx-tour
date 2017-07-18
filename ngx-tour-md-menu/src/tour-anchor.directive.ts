import { Directive, ElementRef, Input, OnDestroy, OnInit, Optional, ViewContainerRef } from '@angular/core';
import { Directionality, MdMenu, MdMenuTrigger, Overlay, OverlayRef } from '@angular/material';
import { IStepOption, TourAnchorDirective, TourService, TourState } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorMdMenuDirective extends MdMenuTrigger implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(
    private _superOverlay: Overlay, private _superElement: ElementRef,
    private _superViewContainerRef: ViewContainerRef,
    @Optional() private _superDir: Directionality,
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService,
  ) {
    super(_superOverlay, _superElement, _superViewContainerRef, _superDir);
    this.menu = new MdMenu(undefined);
    this.element = _superElement;
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
    this.menu = this.tourStepTemplate.templateComponent.tourStep;
    super.ngAfterViewInit();
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
    this.openMenu();
    if ((<any>this)._overlayRef) {
      (<OverlayRef>(<any>this)._overlayRef).backdropClick().subscribe(event => {
        if (this.tourService.getStatus() !== TourState.OFF) {
          this.tourService.end();
        }
      });
    }
  }

  public hideTourStep(): void {
    this.closeMenu();
  }
}
