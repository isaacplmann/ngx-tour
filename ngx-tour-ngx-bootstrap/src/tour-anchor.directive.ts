import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
} from '@angular/core';
import { ComponentLoaderFactory, PopoverConfig, PopoverDirective } from 'ngx-bootstrap';
import { IStepOption, TourAnchorDirective } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-bootstrap-tour.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgxBootstrapDirective extends PopoverDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(private tourService: NgxbTourService,
              private tourStepTemplate: TourStepTemplateService,
              _elementRef: ElementRef,
              _renderer: Renderer2,
              viewContainerRef: ViewContainerRef,
              _config: PopoverConfig,
              _cis: ComponentLoaderFactory,
  ) {
    super(_elementRef, _renderer, viewContainerRef, _config, _cis);
    this.element = _elementRef;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    this.popover = this.tourStepTemplate.template;
    this.popoverContext = { step };
    this.popoverTitle = step.title;
    this.container =  'body';
    this.containerClass = 'ngx-bootstrap';
    this.placement = step.placement || 'top';
    this.show();
    if (!step.preventScrolling) {
      if (!withinviewport(this.element.nativeElement, { sides: 'bottom' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(false);
      } else if (!withinviewport(this.element.nativeElement, { sides: 'left top right' })) {
        (<HTMLElement>this.element.nativeElement).scrollIntoView(true);
      }
    }
  }

  public hideTourStep(): void {
    this.hide();
  }
}
