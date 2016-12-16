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
      content: 'first content',
      route: '',
      title: 'First',
    }, {
      anchorId: 'second',
      content: 'second content',
      route: 'second',
      title: 'Second',
    }, {
      anchorId: 'title',
      content: 'right content',
      placement: 'right',
      title: 'Right',
    }, {
      anchorId: 'title',
      content: 'below content',
      placement: 'below',
      title: 'Below',
    }, {
      anchorId: 'title',
      content: 'left content',
      placement: 'left',
      title: 'Left',
    }]);
    this.tourService.start();
  }
}
