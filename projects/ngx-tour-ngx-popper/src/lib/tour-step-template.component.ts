import {
  AfterViewInit,
  AfterContentInit,
  Component,
  ContentChild,
  Input,
  ViewChild,
  ViewEncapsulation,
  TemplateRef
} from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxPopperModule, PopperContent } from 'ngx-popper';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <popper-content class="popper-content">
      <ng-container
        *ngTemplateOutlet="
          stepTemplate || stepTemplateContent || defaultTemplate;
          context: { step: step }
        "
      ></ng-container>
    </popper-content>

    <ng-template #defaultTemplate let-step="step">
      <p class="ngxp-title">{{ step?.title }}</p>
      <p class="ngxp-content">{{ step?.content }}</p>
      <div class="tour-step-navigation">
        <button
          [hidden]="!tourService.hasPrev(step)"
          class="ngxp-btn btn-prev"
          (click)="tourService.prev()"
        >
          « {{ step?.prevBtnTitle }}
        </button>
        <button
          [hidden]="!tourService.hasNext(step)"
          class="ngxp-btn btn-next"
          (click)="tourService.next()"
        >
          {{ step?.nextBtnTitle }} »
        </button>
        <button class="ngxp-btn btn-end" (click)="tourService.end()">
          {{ step?.endBtnTitle }}
        </button>
      </div>
    </ng-template>
  `
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent
  implements AfterViewInit, AfterContentInit {
  @ViewChild(PopperContent, { static: true })
  public popperContent: PopperContent;

  @Input()
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  @ContentChild(TemplateRef, { static: false })
  public stepTemplateContent: TemplateRef<{ step: IStepOption }>;

  public step: IStepOption = {};

  constructor(
    private tourStepTemplateService: TourStepTemplateService,
    public tourService: NgxpTourService
  ) {
    super(tourService);
  }

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.templateComponent = this;
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template = this.popperContent;
  }
}
