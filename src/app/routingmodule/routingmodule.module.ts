import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutingmoduleRoutingModule } from './routingmodule-routing.module';
import { RoutingmoduleComponent } from './routingmodule.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingmoduleRoutingModule
  ],
  declarations: [RoutingmoduleComponent]
})
export class RoutingmoduleModule { }
