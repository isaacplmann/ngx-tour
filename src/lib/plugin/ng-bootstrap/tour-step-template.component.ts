import { TourService } from '../../tour.service';
import { TourStepTemplateService } from './tour-step-template.service';
import { Component, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  styles: ['body { max-height: 100vh; }'],
  template: `
    <template #tourStep let-step="step">
      <p class="tour-step-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« Prev</button>
        <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">Next »</button>
        <button class="btn btn-sm btn-default" (click)="tourService.end()">End</button>
      </div>
    </template>
  `,
})
export class TourStepTemplateComponent implements AfterViewInit {
  @ViewChild('tourStep', { read: TemplateRef }) public tourStepTemplate: TemplateRef<any>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: TourService) {}

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.template = this.tourStepTemplate;
  }
}
