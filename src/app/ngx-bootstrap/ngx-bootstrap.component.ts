import { TourService } from 'ngx-tour-ngx-bootstrap';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ngx-bootstrap-route',
  templateUrl: './ngx-bootstrap.component.html',
})
export class NgxBootstrapComponent {
  constructor(public tourService: TourService) {
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-Tour tour!',
      placement: 'right',
      title: 'Welcome',
    }, {
      anchorId: 'angular-ui-tour',
      content: 'Thanks to angular-ui-tour for the inspiration for the library',
      placement: 'bottom',
      title: 'angular-ui-tour',
    }, {
      anchorId: 'usage',
      content: '...then use it.',
      placement: 'right',
      title: 'Usage',
    }, {
      anchorId: 'tourService.start',
      content: 'Don\'t forget to actually start the tour.',
      placement: 'top',
      title: 'Start the tour',
    }, {
      anchorId: 'config.anchorId',
      content: 'Every step needs an anchor.',
      title: 'Anchor',
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes. No placement.',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'ngx-bootstrap/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'bottom',
      title: 'Route Return',
    }, {
      anchorId: 'config.placement.default',
      content: 'Steps can be positioned around an anchor. You can even have multiple steps use the same anchor.',
      title: 'No Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the left.',
      placement: 'left',
      title: 'Left Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Sliiide to the right.',
      placement: 'right',
      title: 'Right Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'Take it back now y\'all.  One hop this time.',
      placement: 'bottom',
      title: 'Bottom Placement',
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }, {
      anchorId: 'config.buttons.custom',
      content: 'You can set cutom step button names',
      title: 'Button Titles',
      prevBtnTitle: 'My Prev',
      nextBtnTitle: 'My Next',
      endBtnTitle: 'My End'
    }],
      {
        route: 'ngx-bootstrap',
      }
    );
    this.tourService.start();
  }
}
