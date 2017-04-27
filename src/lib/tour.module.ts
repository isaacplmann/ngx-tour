import { TourConsoleModule } from './plugin/console/console.module';
import { TourService } from './tour.service';
import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
    declarations: [],
    exports: [HotkeyModule],
    imports: [CommonModule, HotkeyModule, RouterModule],
})
export class TourModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
                ...HotkeyModule.forRoot().providers,
            ],
        };
    }
};

export { TourConsoleModule, TourService };
