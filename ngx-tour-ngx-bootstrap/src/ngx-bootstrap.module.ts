import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { PopoverModule } from 'ngx-bootstrap/popover';
import { TourModule, TourService } from 'ngx-tour-core';

import { TourAnchorNgxBootstrapDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';

export { TourAnchorNgxBootstrapDirective, TourStepTemplateComponent, TourService };

@NgModule({
  declarations: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
  exports: [TourAnchorNgxBootstrapDirective, TourStepTemplateComponent],
  imports: [CommonModule, PopoverModule.forRoot()],
})
export class TourNgxBootstrapModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourNgxBootstrapModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
      ],
    };
  }
}
