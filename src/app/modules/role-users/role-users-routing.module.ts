import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoleUsersComponent } from './components/role-users/role-users.component';


const routes: Routes = [
  {
    path: '',
    component: RoleUsersComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RoleUsersRoutingModule { }
