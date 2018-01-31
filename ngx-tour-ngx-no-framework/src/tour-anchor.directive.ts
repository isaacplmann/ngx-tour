import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  ViewContainerRef,
  ChangeDetectorRef,
  Injector,
  ComponentFactoryResolver
} from '@angular/core';
import { NgxPopperModule, PopperController } from 'ngx-popper';
import { IStepOption, TourAnchorDirective } from 'ngx-tour-core';
import withinviewport from 'withinviewport';

import { TourStepTemplateService } from './tour-step-template.service';
import { NgxnfTourService } from './ngx-no-framework-tour.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorNgxNoFrameworkDirective extends PopperController implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;
  private element: ElementRef;

  constructor(private tourService: NgxnfTourService, private tourStepTemplate: TourStepTemplateService, _elementRef: ElementRef, _renderer: Renderer2,
    injector: Injector, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, changeDetectorRef: ChangeDetectorRef
  ) {
    super(viewContainerRef, changeDetectorRef, componentFactoryResolver, _renderer, {});
    this.element = _elementRef;
  }

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    //this.content = 'Test';
    //this.content = this.element.nativeElement;
    //this.content = this.tourStepTemplate.template;
    //this.popoverContext = { step };
    //this.popoverTitle = step.title;
    //this.container =  'body';
    //this.containerClass = 'ngx-no-framework';
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
