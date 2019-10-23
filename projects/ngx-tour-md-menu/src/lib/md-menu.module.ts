import { TourAnchorOpenerComponent } from './tour-anchor-opener.component';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

import { TourModule } from 'ngx-tour-core';
import { TourAnchorMatMenuDirective } from './tour-anchor.directive';
import { TourStepTemplateComponent } from './tour-step-template.component';
import { TourStepTemplateService } from './tour-step-template.service';
import {TourBackdropService} from './tour-backdrop.service';
import {NgxmTourService} from './ngx-md-menu-tour.service';

export { TourAnchorMatMenuDirective, TourStepTemplateComponent, NgxmTourService };

@NgModule({
  declarations: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourAnchorOpenerComponent],
  entryComponents: [TourAnchorOpenerComponent],
  exports: [TourAnchorMatMenuDirective, TourStepTemplateComponent, TourModule],
  imports: [CommonModule, TourModule,
    MatMenuModule, MatCardModule, MatButtonModule, MatIconModule,
  ],
})
export class TourMatMenuModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourMatMenuModule,
      providers: [
        TourStepTemplateService,
        TourBackdropService,
        ...TourModule.forRoot().providers,
          NgxmTourService
      ],
    };
  }
}
