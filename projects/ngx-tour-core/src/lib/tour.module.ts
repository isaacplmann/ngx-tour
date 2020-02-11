import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TourHotkeyListenerComponent } from './tour-hotkey-listener.component';
import { TourService } from './tour.service';

@NgModule({
    declarations: [TourHotkeyListenerComponent],
    exports: [TourHotkeyListenerComponent],
    imports: [CommonModule, RouterModule],
})
export class TourModule {
    public static forRoot(): ModuleWithProviders<TourModule> {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    }
};

export { TourService };
