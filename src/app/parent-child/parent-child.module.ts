import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ParentChildRoutingModule } from './parent-child-routing.module';
import { ParentMessageComponent } from './parent-message/parent-message.component';
import { ChildMessageComponent } from './child-message/child-message.component';


@NgModule({
  declarations: [
    ParentMessageComponent,
    ChildMessageComponent,
  ],
  imports: [
    CommonModule,
    ParentChildRoutingModule
  ],
})
export class ParentChildModule { }
