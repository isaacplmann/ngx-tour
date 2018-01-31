import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPopperModule } from 'ngx-popper';
import { TourModule } from 'ngx-tour-core';

import { TourAnchorNgxBootstrapDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-no-framework-tour.service';

export { TourAnchorNgxBootstrapDirective, TourStepTemplateComponent, NgxbTourService };

@NgModule({
  declarations: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
  imports: [CommonModule, NgxPopperModule.forRoot()],
})
export class TourNgxNoFrameworkModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgxNoFrameworkModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
        NgxbTourService,
      ],
    };
  }
}
