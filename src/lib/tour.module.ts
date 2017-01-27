import { TourNgBootstrapModule } from './plugin/ng-bootstrap/ng-bootstrap.module';
import { TourConsoleModule } from './plugin/console/console.module';
import { TourService } from './tour.service';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HotkeyModule } from 'angular2-hotkeys';

@NgModule({
  declarations: [],
  exports: [],
  imports: [CommonModule, HotkeyModule, RouterModule],
  providers: [TourService],
})
export class TourModule {};

export { TourConsoleModule, TourNgBootstrapModule };
