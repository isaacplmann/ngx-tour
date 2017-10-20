import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgxBootstrapModule } from 'ngx-tour-ngx-bootstrap';

import { DocsComponent } from './docs.component';
import { NgxBootstrapComponent } from './ngx-bootstrap.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxBootstrapComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: NgxBootstrapComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourNgxBootstrapModule.forRoot(),
  ],
})
export class NgxBootstrapModule { }
