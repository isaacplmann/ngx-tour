import { TourAnchorDirective } from '../../tour-anchor.directive';
import { IStepOption, TourService } from '../../tour.service';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  constructor(private tourService: TourService) {}

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    console.group(step.title);
    console.log(step.content);
    console.log(`${step.placement || 'top'} of ${this.tourAnchor}`);
    console.groupEnd();
  }

  public hideTourStep(): void {
    return;
  }
}
