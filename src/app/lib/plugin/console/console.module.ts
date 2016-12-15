import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { TourModule } from '../../tour.module';
import { TourAnchorConsoleDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

export { TourAnchorConsoleDirective };

@NgModule({
  declarations: [TourAnchorConsoleDirective],
  exports: [TourAnchorConsoleDirective],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
})
export class TourConsoleModule {}
