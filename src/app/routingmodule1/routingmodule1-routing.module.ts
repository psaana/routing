import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Routingmodule1Component } from './routingmodule1.component';

const routes: Routes = [
  {path:'',component:Routingmodule1Component
  
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Routingmodule1RoutingModule { }
