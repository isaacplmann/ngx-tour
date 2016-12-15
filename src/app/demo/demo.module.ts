import { TourConsoleModule } from '../lib/tour.module';
import { SecondChildComponent } from './second-child.component';
import { HotkeyModule } from 'angular2-hotkeys';
import { RouterModule } from '@angular/router';
import { ChildComponent } from './child.component';
import { DemoComponent } from './demo.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent, ChildComponent, SecondChildComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{
      component: ChildComponent,
      path: '',
      pathMatch: 'full',
    }, {
      component: SecondChildComponent,
      path: 'second',
    }]),
    TourConsoleModule,
    HotkeyModule.forRoot(),
  ],
})
export class DemoModule { }
