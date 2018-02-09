import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgxPopperModule } from 'ngx-popper';
import { TourModule } from 'ngx-tour-core';

import { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxpTourService } from './ngx-popper-tour.service';

export { TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent, NgxpTourService };

@NgModule({
  declarations: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxPopperDirective, TourAnchorNgxPopperPopoverDirective, TourStepTemplateComponent],
  imports: [CommonModule, NgxPopperModule.forRoot()],
})
export class TourNgxPopperModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgxPopperModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
        NgxpTourService,
      ],
    };
  }
}
