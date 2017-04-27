import { TourService } from './../lib/tour.service';
import { Component } from '@angular/core';

@Component({
  selector: 'tour-demo',
  templateUrl: './demo.component.html',
})
export class DemoComponent {
  constructor(public tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ng2-Tour tour!',
      placement: 'below',
      title: 'Welcome',
    }, {
      anchorId: 'angular-ui-tour',
      content: 'Thanks to angular-ui-tour for the inspiration for the library',
      route: '',
      title: 'angular-ui-tour',
    }, {
      anchorId: 'installation',
      content: 'First, install the library...',
      title: 'Installation',
    }, {
      anchorId: 'usage',
      content: '...then use it.',
      title: 'Usage',
    }, {
      anchorId: 'tourService.start',
      content: 'Don\'t forget to actual start the tour.',
      title: 'Start the tour',
    }, {
      anchorId: 'config.anchorId',
      content: 'Every step needs an anchor.',
      title: 'Anchor',
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes.',
      route: '',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'below',
      route: '',
      title: 'Route Return',
    }, {
      anchorId: 'config.placement.default',
      content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the left.',
      placement: 'left',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the right.',
      placement: 'right',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Take it back now y\'all.  One hop this time.',
      placement: 'below',
      title: 'Placement',
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }]);
    this.tourService.start();
  }
}
