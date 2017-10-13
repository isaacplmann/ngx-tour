import { Injectable } from '@angular/core';
import { CoreTourService, IStepOption } from 'ngx-tour-core';

@Injectable()
export class MdMenuTourService extends CoreTourService<IStepOption> {}