import { Injectable } from '@angular/core';
import { TourService } from 'ngx-tour-core';

import { INgxnfStepOption } from './step-option.interface';

@Injectable()
export class NgxnfTourService extends TourService<INgxnfStepOption> {}
