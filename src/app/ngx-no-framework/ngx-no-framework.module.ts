import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgxNoFrameworkModule } from 'ngx-tour-ngx-no-framework';

import { DocsComponent } from './docs.component';
import { NgxNoFrameworkComponent } from './ngx-no-framework.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxNoFrameworkComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{
      component: NgxNoFrameworkComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourNgxNoFrameworkModule.forRoot(),
  ],
})
export class NgxNoFrameworkModule { }
