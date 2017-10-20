import { AfterContentInit, Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';

import { NgxbTourService } from './ngx-bootstrap-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <ng-template #tourStep let-step="step">
      <p class="tour-step-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« Prev</button>
        <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">Next »</button>
        <button class="btn btn-sm btn-default" (click)="tourService.end()">End</button>
      </div>
    </ng-template>
  `,
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef }) public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: NgxbTourService) {
    super(tourService);
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }
}
