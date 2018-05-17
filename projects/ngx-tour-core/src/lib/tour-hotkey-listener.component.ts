import { Component, HostListener } from '@angular/core';

import { TourService, TourState } from './tour.service';

@Component({
  selector: 'tour-hotkey-listener',
  template: `<ng-content></ng-content>`
})
export class TourHotkeyListenerComponent {
  constructor(public tourService: TourService) {}

  /**
   * Configures hot keys for controlling the tour with the keyboard
   */
  @HostListener('window:keydown.Escape')
  public onEscapeKey(): void {
    if (
      this.tourService.getStatus() === TourState.ON &&
      this.tourService.isHotkeysEnabled()
    ) {
      this.tourService.end();
    }
  }

  @HostListener('window:keydown.ArrowRight')
  public onArrowRightKey(): void {
    if (
      this.tourService.getStatus() === TourState.ON &&
      this.tourService.hasNext(this.tourService.currentStep) &&
      this.tourService.isHotkeysEnabled()
    ) {
      this.tourService.next();
    }
  }

  @HostListener('window:keydown.ArrowLeft')
  public onArrowLeftKey(): void {
    if (
      this.tourService.getStatus() === TourState.ON &&
      this.tourService.hasPrev(this.tourService.currentStep) &&
      this.tourService.isHotkeysEnabled()
    ) {
      this.tourService.prev();
    }
  }
}
