import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MdMenuModule, MdButtonModule, MdCardModule, MdIconModule } from '@angular/material';

import { TourModule } from 'ngx-tour-core';
import { TourAnchorMdMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import { MdMenuTourService } from './md-menu-tour.service';

export { TourAnchorMdMenuDirective, TourStepTemplateComponent, MdMenuTourService };

@NgModule({
  declarations: [TourAnchorMdMenuDirective, TourStepTemplateComponent],
  exports: [TourAnchorMdMenuDirective, TourStepTemplateComponent, TourModule],
  imports: [CommonModule, TourModule,
    MdMenuModule, MdCardModule, MdButtonModule, MdIconModule
  ],
})
export class TourMdMenuModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourMdMenuModule,
      providers: [
        TourStepTemplateService,
        ...TourModule.forRoot().providers,
        MdMenuTourService
      ],
    };
  }
}
