import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { TourHotkeyListenerComponent, TourModule, TourService } from 'ngx-tour-core';

import { TourAnchorConsoleDirective } from './tour-anchor.directive';

export { TourAnchorConsoleDirective, TourService };

@NgModule({
  declarations: [TourAnchorConsoleDirective],
  exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
})
export class TourConsoleModule {
  public static forRoot(): ModuleWithProviders<TourConsoleModule> {
    return {
      ngModule: TourConsoleModule,
      providers: [
        ...TourModule.forRoot().providers,
      ],
    };
  }
}
