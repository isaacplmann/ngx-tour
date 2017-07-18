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
import { NgbPopoverConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbPopover } from '@ng-bootstrap/ng-bootstrap/popover/popover';
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
