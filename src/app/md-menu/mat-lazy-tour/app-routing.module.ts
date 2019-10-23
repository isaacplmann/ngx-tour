import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'module-app-home',
    pathMatch: 'full'
  },
  {
    path: 'module-app-home',
    component: HomeComponent
  },
  {
    path: 'module-a',
    loadChildren: () => import('./modules/module-a/module-a.module').then(m => m.ModuleAModule)
  },
  {
    path: 'module-b',
    loadChildren: () => import('./modules/module-b/module-b.module').then(m => m.ModuleBModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
