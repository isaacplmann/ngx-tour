import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { TourModule } from '../../tour.module';
import { TourAnchorNgBootstrapDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

export { TourAnchorNgBootstrapDirective };

@NgModule({
  declarations: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgBootstrapDirective, TourStepTemplateComponent],
  imports: [CommonModule, NgbPopoverModule.forRoot()],
})
export class TourNgBootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgBootstrapModule,
      providers: [
        TourStepTemplateService,
        TourModule.forRoot().providers,
      ],
    };
  }
}
