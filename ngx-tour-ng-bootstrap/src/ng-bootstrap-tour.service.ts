import { Injectable } from '@angular/core';
import { CoreTourService } from 'ngx-tour-core';

import { INgbStepOption } from './step-option.interface';

@Injectable()
export class NgbTourService extends CoreTourService<INgbStepOption> {}