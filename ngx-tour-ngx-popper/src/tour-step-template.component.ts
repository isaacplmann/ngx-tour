import { AfterContentInit, Component, ContentChild, Input, ViewChild, ViewEncapsulation } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxPopperModule, PopperContent } from 'ngx-popper';
import { NgxpTourService } from './ngx-popper-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <popper-content #tourStep>
        <p class="bold">{{step?.title}}</p>
        <p class="thin">{{step?.content}}</p>
        <div class="tour-step-navigation">
          <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« {{step?.prevBtnTitle}}</button>
          <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">{{step?.nextBtnTitle}} »</button>
          <button class="btn btn-sm btn-default" (click)="tourService.end()">{{step?.endBtnTitle}}</button>
        </div>         
    </popper-content>
  `,
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: PopperContent }) public defaultTourStepTemplate: PopperContent;

  @Input()
  @ContentChild(PopperContent)
  public stepTemplate: PopperContent;

  public step: IStepOption = {};

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: NgxpTourService) {
    super(tourService);
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template = this.defaultTourStepTemplate;
  }
}
