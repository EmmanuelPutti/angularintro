import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'dynamic-loader', 
  loadChildren: () => import('./dynamic-component-loader/dynamic-component-loader.module').then(mod => mod.DynamicComponentLoaderModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
