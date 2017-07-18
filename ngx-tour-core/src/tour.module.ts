import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TourService } from './tour.service';

@NgModule({
    declarations: [],
    exports: [],
    imports: [CommonModule, RouterModule],
})
export class TourModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: TourModule,
            providers: [
                TourService,
            ],
        };
    }
};

export { TourService };
