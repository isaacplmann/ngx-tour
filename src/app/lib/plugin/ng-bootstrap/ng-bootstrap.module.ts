import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { TourModule } from '../../tour.module';
import { TourAnchorNgBootstrapDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

export { TourAnchorNgBootstrapDirective };

@NgModule({
  declarations: [TourAnchorNgBootstrapDirective],
  exports: [TourAnchorNgBootstrapDirective],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
})
export class TourNgBootstrapModule {}
