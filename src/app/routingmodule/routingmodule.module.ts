import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../app.service';

import { RoutingmoduleRoutingModule } from './routingmodule-routing.module';
import { RoutingmoduleComponent } from './routingmodule.component';

@NgModule({
  imports: [
    CommonModule,
    RoutingmoduleRoutingModule
  ],
  providers : [UserService],
  declarations: [RoutingmoduleComponent]
})
export class RoutingmoduleModule { }
