import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourConsoleModule } from 'ngx-tour-console';

import { ConsoleComponent } from './console.component';
import { DocsComponent } from './docs.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [ConsoleComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: ConsoleComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourConsoleModule.forRoot(),
  ],
})
export class ConsoleModule { }
