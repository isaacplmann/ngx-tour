import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class TourStepTemplateService {
  public template: TemplateRef<{content: string}>;
}
