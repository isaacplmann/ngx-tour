import { TourService } from '../../tour.service';
import { TourStepTemplateService } from './html-tour.service';
import { Component, TemplateRef, ViewChild, AfterViewInit, ViewEncapsulation } from '@angular/core';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: "html-tour",
  styles: ['body { max-height: 100vh; }'],
  templateUrl: "./html-tour.component.html",
})
export class TourStepTemplateComponent implements AfterViewInit {
  @ViewChild('tourStep', { read: TemplateRef }) public tourStepTemplate: TemplateRef<any>;

  constructor(private tourStepTemplateService: TourStepTemplateService, public tourService: TourService) {}

  public ngAfterViewInit(): void {
    this.tourStepTemplateService.template = this.tourStepTemplate;
  }
}
