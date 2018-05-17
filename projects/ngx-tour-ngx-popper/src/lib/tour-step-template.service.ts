import { Injectable } from '@angular/core';
import { PopperContent } from 'ngx-popper';
import { TourStepTemplateComponent } from './tour-step-template.component';

@Injectable()
export class TourStepTemplateService {
  public template: PopperContent;
  public templateComponent: TourStepTemplateComponent;
}
