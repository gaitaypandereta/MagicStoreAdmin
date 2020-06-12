import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {AdministratorComponent} from './administrator/administrator.component';
import {CukisComponent} from './cukis/cukis.component';
import {DetallescukiComponent} from './detallescuki/detallescuki.component';


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

  { path : 'detallescuki/:id',
     component : DetallescukiComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
