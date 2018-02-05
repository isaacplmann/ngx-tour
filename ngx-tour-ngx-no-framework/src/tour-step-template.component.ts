import { AfterContentInit, Component, ContentChild, Input, TemplateRef, ViewChild, ViewEncapsulation } from '@angular/core';
import { IStepOption, TourHotkeyListenerComponent } from 'ngx-tour-core';
import { NgxPopperModule } from 'ngx-popper';
import { NgxnfTourService } from './ngx-no-framework-tour.service';
import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'tour-step-template',
  template: `
    <ng-template #tourStep let-step="step">
      <div     [popper]="tourStep"
            [popperShowOnStart]="true"
            [popperTrigger]="'click'"
            [popperPlacement]="'bottom'">
        <p class="bold">{{step?.title}}</p>
        <p class="thin">{{step?.content}}</p>
        <div class="tour-step-navigation">
          <button *ngIf="tourService.hasPrev(step)" class="btn btn-sm btn-default" (click)="tourService.prev()">« {{step?.prevBtnTitle}}</button>
          <button *ngIf="tourService.hasNext(step)" class="btn btn-sm btn-default" (click)="tourService.next()">{{step?.nextBtnTitle}} »</button>
          <button class="btn btn-sm btn-default" (click)="tourService.end()">{{step?.endBtnTitle}}</button>
        </div>         
      </div>
    </ng-template>
  `,
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterContentInit {
  @ViewChild('tourStep', { read: TemplateRef }) public defaultTourStepTemplate: TemplateRef<any>;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: NgxnfTourService) {
    super(tourService);
  }

  public ngAfterContentInit(): void {
    this.tourStepTemplateService.template = this.stepTemplate || this.defaultTourStepTemplate;
  }
}
