import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewcomponentComponent } from './newcomponent/newcomponent.component';

const routes: Routes = [
  {
    path: '',component:NewcomponentComponent,
    children: [
      {path:'new',component:NewcomponentComponent}
    ],
  },
  {
    path:'routingmodule',loadChildren:'./routingmodule/routingmodule.module#RoutingmoduleModule'
  },
  {
    path:'routingmodule1',loadChildren:'./routingmodule1/routingmodule1.module#Routingmodule1Module'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
