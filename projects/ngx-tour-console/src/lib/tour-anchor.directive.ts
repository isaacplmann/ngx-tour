import {TourAnchorDirective, TourService, IStepOption, isInViewport, ElementSides} from 'ngx-tour-core';
import {Directive, ElementRef, Input, OnDestroy, OnInit} from '@angular/core';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  constructor(
      private tourService: TourService,
      private element: ElementRef
  ) {}

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    const htmlElement: HTMLElement = this.element.nativeElement;

    if (!step.preventScrolling) {
      if (!isInViewport(htmlElement, ElementSides.Bottom)) {
        htmlElement.scrollIntoView(false);
      } else if (!isInViewport(htmlElement, ElementSides.Top)) {
        htmlElement.scrollIntoView(true);
      }
    }

    console.group(step.title);
    console.log(step.content);
    console.log(`${step.placement || 'above'} ${this.tourAnchor}`);
    console.groupEnd();
  }

  public hideTourStep(): void {
    return;
  }
}
