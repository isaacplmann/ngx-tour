import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModuleBComponent } from './module-b.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'module-b-component',
    pathMatch: 'full'
  },
  {
    path: 'module-b-component',
    component: ModuleBComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuleBRoutingModule { }
