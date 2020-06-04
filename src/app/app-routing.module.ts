import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdministratorComponent} from './administrator/administrator.component';
import {CukisComponent} from './cukis/cukis.component';
import {DetalleComponent} from './detalle/detalle.component';
const routes: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inicio'
  },
  {
    path: 'inicio',
    component: LoginComponent
  },

  {
  path: 'cukis',
    component: CukisComponent
  },

  { path : 'administrator',
     component : AdministratorComponent
  },

  { path : "" , component : DetalleComponent , outlet : "sidebar" },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
