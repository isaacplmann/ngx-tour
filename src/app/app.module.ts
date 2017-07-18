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
      loadChildren: './console/console.module#ConsoleModule',
      path: 'console',
    }, {
      loadChildren: './md-menu/md-menu.module#MdMenuModule',
      path: 'md-menu',
    }, {
      redirectTo: 'md-menu',
      path: '**',
    }]),
  ],
})
export class DemoModule { }
