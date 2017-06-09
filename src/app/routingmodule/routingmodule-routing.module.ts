import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoutingmoduleComponent } from './routingmodule.component';

const routes: Routes = [
  {
path:'',component:RoutingmoduleComponent

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoutingmoduleRoutingModule { }
