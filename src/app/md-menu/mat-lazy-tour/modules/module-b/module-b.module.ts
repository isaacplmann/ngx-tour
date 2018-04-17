import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleBRoutingModule } from './module-b-routing.module';
import { ModuleBComponent } from './module-b.component';

import { TourMatMenuModule } from 'ngx-tour-md-menu';

@NgModule({
  imports: [
    CommonModule,
    ModuleBRoutingModule,
    TourMatMenuModule
  ],
  declarations: [ModuleBComponent]
})
export class ModuleBModule { }
