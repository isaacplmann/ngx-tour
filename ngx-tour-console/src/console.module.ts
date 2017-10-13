import { TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TourModule } from 'ngx-tour-core';
import { TourAnchorConsoleDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

import { ConsoleTourService } from './console-tour.service';

export { TourAnchorConsoleDirective };

@NgModule({
  declarations: [TourAnchorConsoleDirective],
  exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
})
export class TourConsoleModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourConsoleModule,
      providers: [
        ...TourModule.forRoot().providers,
        ConsoleTourService
      ],
    };
  }
}
