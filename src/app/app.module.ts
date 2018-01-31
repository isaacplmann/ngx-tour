import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { DemoComponent } from './demo.component';

@NgModule({
  bootstrap: [DemoComponent],
  declarations: [DemoComponent],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    RouterModule.forRoot([{
      loadChildren: './ng-bootstrap/ng-bootstrap.module#NgBootstrapModule',
      path: 'ng-bootstrap',
    }, {
      loadChildren: './ngx-bootstrap/ngx-bootstrap.module#NgxBootstrapModule',
      path: 'ngx-bootstrap',
    }, {
      loadChildren: './ngx-no-framework/ngx-no-framework.module#NgxNoFrameworkModule',
      path: 'ngx-no-framework',
    }, {
      loadChildren: './console/console.module#ConsoleModule',
      path: 'console',
    }, {
      loadChildren: './md-menu/md-menu.module#MdMenuModule',
      path: '',
    }, {
      redirectTo: '',
      path: '**',
    }]),
  ],
})
export class DemoModule { }
