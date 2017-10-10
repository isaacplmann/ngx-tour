import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Injector,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { NgbPopoverConfig, NgbPopover } from '@ng-bootstrap/ng-bootstrap';
import { IStepOption, TourAnchorDirective, TourService } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgBootstrapDirective extends NgbPopover implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService, _elementRef: ElementRef, _renderer: Renderer2,
    injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, config: NgbPopoverConfig,
    ngZone: NgZone,
  ) {
    super(_elementRef, _renderer, injector, componentFactoryResolver, viewContainerRef, config, ngZone);
    this.element = _elementRef;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.ngbPopover = this.tourStepTemplate.template;
    this.popoverTitle = step.title;
    this.container =  'body';
    const placements: string[] = [],
          stepPlacementParts = step.placement && step.placement.split('-');
    
    for(let placementPart of stepPlacementParts) {
      switch (placementPart) {
        case 'above':
          placements.push('top');
          break;
        case 'below':
          placements.push('bottom');
          break;
        case 'right':
        case 'after':
          placements.push('right');
          break;
        case 'left':
        case 'before':
          placements.push('left');
          break;
        default:
          placements.push('top');
      }
    }
    
    this.placement = <any>placements.join('-');
    this.open({ step });
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
  }

  public hideTourStep(): void {
    this.close();
  }
}
