import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routingmodule1RoutingModule } from './routingmodule1-routing.module';
import { Routingmodule1Component } from './routingmodule1.component';

@NgModule({
  imports: [
    CommonModule,
    Routingmodule1RoutingModule
  ],
  declarations: [Routingmodule1Component]
})
export class Routingmodule1Module { }
