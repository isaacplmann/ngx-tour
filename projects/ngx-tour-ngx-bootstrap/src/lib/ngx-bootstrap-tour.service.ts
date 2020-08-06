import { Injectable } from '@angular/core';
import { TourService } from '@semioticlabs/ngx-tour-core';

import { INgxbStepOption } from './step-option.interface';

@Injectable()
export class NgxbTourService extends TourService<INgxbStepOption> {}
