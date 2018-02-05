import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TourNgxPopperModule } from 'ngx-tour-ngx-popper';
import { NgxPopperModule } from 'ngx-popper';
import { DocsComponent } from './docs.component';
import { NgxPopperComponent } from './ngx-popper.component';
import { OtherRouteComponent } from './other-route.component';

@NgModule({
  declarations: [NgxPopperComponent, DocsComponent, OtherRouteComponent],
  imports: [
    CommonModule,
    NgxPopperModule,
    RouterModule.forChild([{
      component: NgxPopperComponent,
      path: '',
      children: [{
        component: DocsComponent,
        path: '',
      }, {
        component: OtherRouteComponent,
        path: 'other',
      }]
    }]),
    TourNgxPopperModule.forRoot(),
  ],
})
export class NgxpPopperModule { }
