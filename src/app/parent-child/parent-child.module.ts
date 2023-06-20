import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ]
})
export class ParentChildModule { }
