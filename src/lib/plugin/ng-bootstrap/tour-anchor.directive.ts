import { TourStepTemplateService } from './tour-step-template.service';
import { TourAnchorDirective } from '../../tour-anchor.directive';
import { IStepOption, TourService } from '../../tour.service';
import {
  ComponentFactoryResolver,
  Directive,
  ElementRef,
  Injector,
  Input,
  NgZone,
  OnInit,
  OnDestroy,
  Renderer,
  ViewContainerRef,
} from '@angular/core';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
const scrollIntoViewIfNeeded = require('scroll-into-view-if-needed');

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgBootstrapDirective extends NgbPopover implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(
    private tourService: TourService, private tourStepTemplate: TourStepTemplateService, _elementRef: ElementRef, _renderer: Renderer,
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
    console.log(step);
    this.ngbPopover = this.tourStepTemplate.template;
    this.popoverTitle = step.title;
    this.container =  'body';
    switch (step.placement) {
      case 'above':
        this.placement = 'top';
        break;
      case 'below':
        this.placement = 'bottom';
        break;
      case 'right':
      case 'after':
        this.placement = 'right';
        break;
      case 'left':
      case 'before':
        this.placement = 'left';
        break;
      default:
        this.placement = 'top';
    }
    this.open({ step });
    if (!step.preventScrolling) {
      scrollIntoViewIfNeeded(this.element.nativeElement, true);
    }
  }

  public hideTourStep(): void {
    this.close();
  }
}
