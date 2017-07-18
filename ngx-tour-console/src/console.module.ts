import { NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { TourModule, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { TourAnchorConsoleDirective } from './tour-anchor.directive';
import { CommonModule } from '@angular/common';

export { TourAnchorConsoleDirective };

@NgModule({
  declarations: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
  exports: [TourAnchorConsoleDirective, TourHotkeyListenerComponent],
  imports: [TourModule, CommonModule, NgbPopoverModule.forRoot()],
})
export class TourConsoleModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: TourConsoleModule,
      providers: [
        ...TourModule.forRoot().providers,
      ],
    };
  }
}
