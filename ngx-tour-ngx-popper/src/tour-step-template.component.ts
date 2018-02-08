import { AfterViewInit, AfterContentInit, Component, ContentChild, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxPopperModule, PopperContent } from 'ngx-popper';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <popper-content #tourStep class="popper-content">
      <ng-container *ngTemplateOutlet="stepTemplate || defaultTemplate; context: { step: step }"></ng-container>      
    </popper-content>

    <ng-template #defaultTemplate let-step="step">
      <p class="ngxp-title">{{step?.title}}</p>
      <p class="ngxp-content">{{step?.content}}</p>
      <div class="tour-step-navigation">
        <button [disabled]="!tourService.hasPrev(step)" class="ngxp-btn" (click)="tourService.prev()">« {{step?.prevBtnTitle}}</button>
        <button [disabled]="!tourService.hasNext(step)" class="ngxp-btn" (click)="tourService.next()">{{step?.nextBtnTitle}} »</button>
        <button class="ngxp-btn" (click)="tourService.end()">{{step?.endBtnTitle}}</button>
      </div>
    </ng-template>
  `,
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit, AfterContentInit {
  @ViewChild('tourStep', { read: PopperContent }) public defaultTourStepTemplate: PopperContent;

  @Input()
  @ContentChild(PopperContent)
  public stepTemplate: PopperContent;

  public step: IStepOption = {};

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: NgxpTourService) {
    super(tourService);
  }

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.templateComponent = this;
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }

}
