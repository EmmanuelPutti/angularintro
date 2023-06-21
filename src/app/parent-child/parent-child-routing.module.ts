import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { SuperParentComponent } from './super-parent/super-parent.component';

const routes: Routes = [
  {path : '', component : ParentComponent},
  {path : 'super-parent', component : SuperParentComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentChildRoutingModule { }
