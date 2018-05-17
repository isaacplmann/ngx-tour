import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TourModule } from 'ngx-tour-core';

import { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { NgxbTourService } from './ngx-bootstrap-tour.service';

export { TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent, NgxbTourService };

@NgModule({
  declarations: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxBootstrapDirective, TourAnchorNgxBootstrapPopoverDirective, TourStepTemplateComponent],
  imports: [CommonModule, PopoverModule.forRoot()],
})
export class TourNgxBootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgxBootstrapModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
        NgxbTourService,
      ],
    };
  }
}
