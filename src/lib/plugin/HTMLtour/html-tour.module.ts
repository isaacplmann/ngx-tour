import { TourStepTemplateComponent } from './html-tour.component';
import { TourStepTemplateService } from './html-tour.service';
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
export class TourHTMLModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourHTMLModule,
      providers: [
        TourStepTemplateService,
        TourModule.forRoot().providers,
      ],
    };
  }
}
