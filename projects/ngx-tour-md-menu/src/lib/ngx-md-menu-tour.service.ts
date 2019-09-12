import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';

import { INgxmStepOption } from './step-option.interface';
import { Subject, merge } from 'rxjs';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { enableBodyScroll } from 'body-scroll-lock';

@Injectable()
export class NgxmTourService extends TourService<INgxmStepOption> {

    public callback$: Subject<INgxmStepOption> = new Subject();

    constructor(router: Router) {
        super(router);
        this.events$ = merge(
            this.events$,
            this.callback$.pipe(map(value => ({ name: 'callback', value })))
        );
    }

    public end(): void {
        super.end();

        // Removes backdrop overlay because there is a bug if the previous step had a backdrop
        // and next step could not be loaded, the backdrop will stay
        setTimeout(() => {
            const backdrop = document.querySelector('.ngx-tour_backdrop');
            if (backdrop) {
                backdrop.remove();
            }
            enableBodyScroll();
        }, 500);
    }

}
