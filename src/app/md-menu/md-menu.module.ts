import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourMatMenuModule } from 'ngx-tour-md-menu';

import { DocsComponent } from './docs.component';
import { MdMenuComponent } from './md-menu.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [MdMenuComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    TourMatMenuModule.forRoot(),
    RouterModule.forChild([{
      component: MdMenuComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
  ],
})
export class MdMenuModule { }
