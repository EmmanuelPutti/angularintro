import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DynamicComponentLoaderRoutingModule } from './dynamic-component-loader-routing.module';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ProfileHostDirective } from './directives/profile-host/profile-host.directive';
import { GuestCardComponent } from './components/guest-card/guest-card.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WidgetOneComponent } from './components/widget-one/widget-one.component';
import { WidgetTwoComponent } from './components/widget-two/widget-two.component';
import { WidgetComponent } from './components/widget/widget.component';
import { HelloComponent } from './components/hello/hello.component';
import { HiComponent } from './components/hi/hi.component';
import { GoodbyeComponent } from './components/goodbye/goodbye.component';
import { HiHelloGoodbyeComponent } from './components/hi-hello-goodbye/hi-hello-goodbye.component';




@NgModule({
  declarations: [
    UserCardComponent,
    ProfileHostDirective,
    GuestCardComponent,
    ProfileComponent,
    WidgetOneComponent,
    WidgetTwoComponent,
    WidgetComponent,
    HelloComponent,
    HiComponent,
    GoodbyeComponent,
    HiHelloGoodbyeComponent,
  ],
  imports: [
    CommonModule,
    DynamicComponentLoaderRoutingModule
  ]
})
export class DynamicComponentLoaderModule { }
