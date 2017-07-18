import { AfterViewInit, Component, ViewChild, TemplateRef, ContentChild, Input } from '@angular/core';
import { MdMenu } from '@angular/material';
import { IStepOption, TourHotkeyListenerComponent, TourService } from 'ngx-tour-core';

import { TourStepTemplateService } from './tour-step-template.service';

@Component({
  selector: 'tour-step-template',
  styles: ['/deep/ .tour-step .mat-menu-content { padding: 0px }'],
  template: `
    <md-menu [overlapTrigger]="false" class="tour-step">
      <ng-container *ngTemplateOutlet="stepTemplate || defaultTemplate; context: { step: step }"></ng-container>
    </md-menu>
    <ng-template #defaultTemplate let-step="step">
      <md-card (click)="$event.stopPropagation()">
        <md-card-title>
          {{step?.title}}
        </md-card-title>
        <md-card-content>
          {{step?.content}}
        </md-card-content>
        <md-card-actions>
          <button md-icon-button [disabled]="!tourService.hasPrev(step)" (click)="tourService.prev()">
            <md-icon>chevron_left</md-icon>
          </button>
          <button md-icon-button [disabled]="!tourService.hasNext(step)" (click)="tourService.next()">
            <md-icon>chevron_right</md-icon>
          </button>
          <button md-button (click)="tourService.end()">End</button>
        </md-card-actions>
      </md-card>
    </ng-template>
  `,
})
export class TourStepTemplateComponent extends TourHotkeyListenerComponent implements AfterViewInit {
  @ViewChild(MdMenu) public tourStep: MdMenu;

  @Input()
  @ContentChild(TemplateRef)
  public stepTemplate: TemplateRef<{ step: IStepOption }>;

  public step: IStepOption = {};

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: TourService) {
    super(tourService);
  }

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.templateComponent = this;
  }
}
