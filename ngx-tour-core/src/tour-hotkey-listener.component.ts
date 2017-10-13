import { Component, HostListener } from '@angular/core';

import { TourService, TourState, IStepOption } from './tour.service';

@Component({
  selector: 'tour-hotkey-listener',
  template: ` `,
})
export class TourHotkeyListenerComponent {
  constructor(public tourService: TourService<IStepOption>) { }

  /**
   * Configures hot keys for controlling the tour with the keyboard
   */
  @HostListener('window:keydown.Escape')
  public onEscapeKey(event: KeyboardEvent): void {
    if (this.tourService.getStatus() === TourState.ON) {
      this.tourService.end();
    }
  }

  @HostListener('window:keydown.ArrowRight')
  public onArrowRightKey(event: KeyboardEvent): void {
    if (this.tourService.getStatus() === TourState.ON && this.tourService.hasNext(this.tourService.currentStep)) {
      this.tourService.next();
    }
  }

  @HostListener('window:keydown.ArrowLeft')
  public onArrowLeftKey(event: KeyboardEvent): void {
    if (this.tourService.getStatus() === TourState.ON && this.tourService.hasPrev(this.tourService.currentStep)) {
      this.tourService.prev();
    }
  }
}