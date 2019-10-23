import { TourHotkeyListenerComponent, IStepOption } from 'ngx-tour-core';
import { TourStepTemplateService } from './tour-step-template.service';
import {
  Component,
  TemplateRef,
  ViewChild,
  AfterContentInit,
  ViewEncapsulation,
  Input,
  ContentChild
} from '@angular/core';
import { NgbTourService } from './ng-bootstrap-tour.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <ng-template #tourStep let-step="step">
      <p class="tour-step-content">{{ step?.content }}</p>
      <div class="tour-step-navigation">
        <button
          *ngIf="tourService.hasPrev(step)"
          class="btn btn-sm btn-default"
          (click)="tourService.prev()"
        >
          « {{ step?.prevBtnTitle }}
        </button>
        <button
          *ngIf="tourService.hasNext(step)"
          class="btn btn-sm btn-default"
          (click)="tourService.next()"
        >
          {{ step?.nextBtnTitle }} »
        </button>
        <button class="btn btn-sm btn-default" (click)="tourService.end()">
          {{ step?.endBtnTitle }}
        </button>
      </div>
    </ng-template>
  `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent
  implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef, static: true })
  public defaultTourStepTemplate: TemplateRef<any>;

  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  constructor(
    private tourStepTemplateService: TourStepTemplateService,
    public tourService: NgbTourService
  ) {
    super(tourService);
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template =
      this.stepTemplate || this.defaultTourStepTemplate;
  }
}
