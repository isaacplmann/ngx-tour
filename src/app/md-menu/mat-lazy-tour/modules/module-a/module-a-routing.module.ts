import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleAComponent } from './module-a.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'module-a-component',
    pathMatch: 'full'
  },
  {
    path: 'module-a-component',
    component: ModuleAComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleARoutingModule { }
