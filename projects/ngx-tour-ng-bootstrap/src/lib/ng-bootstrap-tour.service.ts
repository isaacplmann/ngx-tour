import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';

import { INgbStepOption } from './step-option.interface';

@Injectable()
export class NgbTourService extends TourService<INgbStepOption> {}
