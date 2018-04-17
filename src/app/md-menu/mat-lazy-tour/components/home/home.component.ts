import { Component, OnInit } from '@angular/core';
import { TourService } from 'ngx-tour-md-menu';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private tourService: TourService) { }

  ngOnInit() {
    this.tourService.initialize(
      [
        {
          anchorId: 'app-home',
          content: 'This is a step from the eager loaded app module in the home component',
          title: 'Home Component',
          route: ''
        },
        {
          anchorId: 'module-a',
          content: 'This is a step from the lazy loaded module-a module in the module-a component',
          title: 'Module-a Component',
          route: 'module-a'
        },
        {
          anchorId: 'module-b',
          content: 'This is a step from the lazy loaded module-b module in the module-b component',
          title: 'Module-b Component',
          route: 'module-b'
        }
      ]
    );

    this.tourService.start();
  }

}
