import { TourService } from './../lib/tour.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tour-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  constructor(public tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'title',
      content: 'Some content',
      title: 'Test',
    }, {
      anchorId: 'first',
      content: 'Other content',
      route: '',
      title: 'First',
    }, {
      anchorId: 'second',
      content: 'Other content',
      route: 'second',
      title: 'Second',
    }, {
      anchorId: 'title',
      content: 'Other content',
      placement: 'right',
      title: 'Right',
    }, {
      anchorId: 'title',
      content: 'Other content',
      placement: 'below',
      title: 'Below',
    }, {
      anchorId: 'title',
      content: 'Other content',
      placement: 'left',
      title: 'Left',
    }]);
    this.tourService.start();
  }
}
