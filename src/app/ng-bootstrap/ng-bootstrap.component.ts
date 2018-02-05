import { TourService, IStepOption } from 'ngx-tour-ng-bootstrap';
import { Component } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'ng-bootstrap-route',
  templateUrl: './ng-bootstrap.component.html',
})
export class NgBootstrapComponent {
  constructor(public tourService: TourService) {
    this.tourService.events$.subscribe(console.log);
    this.tourService.initialize([{
      anchorId: 'start.tour',
      content: 'Welcome to the Ngx-Tour tour!',
      placement: 'bottom',
      title: 'Welcome',
    }, {
      anchorId: 'angular-ui-tour',
      content: 'Thanks to angular-ui-tour for the inspiration for the library',
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
      content: 'Don\'t forget to actually start the tour.',
      title: 'Start the tour',
    }, {
      anchorId: 'config.anchorId',
      content: 'Every step needs an anchor.',
      title: 'Anchor',
    }, {
      anchorId: 'config.route',
      content: 'Tours can span multiple routes.',
      title: 'Route',
    }, {
      anchorId: 'another.route',
      content: 'Like this!',
      route: 'ng-bootstrap/other',
      title: 'Another Route',
    }, {
      anchorId: 'config.route',
      content: 'And then back again.',
      placement: 'bottom',
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
      placement: 'bottom',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - left-top',
      placement: 'left-top',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - top-left',
      placement: 'top-left',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - top-right',
      placement: 'top-right',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - right-top',
      placement: 'right-top',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - right-bottom',
      placement: 'right-bottom',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - bottom-right',
      placement: 'bottom-right',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - bottom-left',
      placement: 'bottom-left',
      title: 'Placement',
    }, {
      anchorId: 'config.placement.default',
      content: 'And on the corners - left-bottom',
      placement: 'left-bottom',
      title: 'Placement',
    }, {
      anchorId: 'config.buttons.custom',
      content: 'You can set custom step button names',
      title: 'Button Titles',
      prevBtnTitle: 'My Prev',
      nextBtnTitle: 'My Next',
      endBtnTitle: 'My End'
    }, {
      anchorId: 'hotkeys',
      content: 'Try using the hotkeys to navigate through the tour.',
      title: 'Hotkeys',
    }, {
      anchorId: 'events',
      content: 'You can subscribe to events',
      title: 'Events',
    }],
    {
      route: 'ng-bootstrap',
    }
  );
    this.tourService.start();
  }
}
