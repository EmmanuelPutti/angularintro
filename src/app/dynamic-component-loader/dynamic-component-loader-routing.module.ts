import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HiHelloGoodbyeComponent } from './components/hi-hello-goodbye/hi-hello-goodbye.component';

const routes: Routes = [
  {path: 'profile', component : ProfileComponent},
  {path: 'widget', component : WidgetComponent},
  {path: 'hello', component : HiHelloGoodbyeComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DynamicComponentLoaderRoutingModule { }
