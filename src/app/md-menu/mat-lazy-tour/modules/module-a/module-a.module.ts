import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModuleARoutingModule } from './module-a-routing.module';
import { ModuleAComponent } from './module-a.component';

import { TourMatMenuModule } from 'ngx-tour-md-menu';

@NgModule({
  imports: [
    CommonModule,
    ModuleARoutingModule,
    TourMatMenuModule
  ],
  declarations: [ModuleAComponent]
})
export class ModuleAModule { }
