import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { TourModule } from '../../tour.module';
import { TourAnchorNgBootstrapDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

export { TourAnchorNgBootstrapDirective };

@NgModule({
  declarations: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
  providers: [TourStepTemplateService],
})
export class TourNgBootstrapModule {}
