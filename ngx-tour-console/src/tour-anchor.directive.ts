import { TourAnchorDirective } from 'ngx-tour-core';
import { IStepOption } from 'ngx-tour-core';
import { Directive, Input, OnDestroy, OnInit } from '@angular/core';

import { ConsoleTourService } from './console-tour.service';

@Directive({
  selector: '[tourAnchor]',
})
export class TourAnchorConsoleDirective implements OnInit, OnDestroy, TourAnchorDirective {
  @Input() public tourAnchor: string;

  constructor(private tourService: ConsoleTourService) {}

  public ngOnInit(): void {
    this.tourService.register(this.tourAnchor, this);
  }

  public ngOnDestroy(): void {
    this.tourService.unregister(this.tourAnchor);
  }

  public showTourStep(step: IStepOption): void {
    console.group(step.title);
    console.log(step.content);
    console.log(`${step.placement || 'above'} ${this.tourAnchor}`);
    console.groupEnd();
  }

  public hideTourStep(): void {
    return;
  }
}
