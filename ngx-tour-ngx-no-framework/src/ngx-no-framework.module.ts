import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPopperModule } from 'ngx-popper';
import { TourModule } from 'ngx-tour-core';

import { TourAnchorNgxNoFrameworkDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxnfTourService } from './ngx-no-framework-tour.service';

export { TourAnchorNgxNoFrameworkDirective, TourStepTemplateComponent, NgxnfTourService };

@NgModule({
  declarations: [TourAnchorNgxNoFrameworkDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxNoFrameworkDirective, TourStepTemplateComponent],
  imports: [CommonModule, NgxPopperModule.forRoot()],
})
export class TourNgxNoFrameworkModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgxNoFrameworkModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
        NgxnfTourService,
      ],
    };
  }
}
