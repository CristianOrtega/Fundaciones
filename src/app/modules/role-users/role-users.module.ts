import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoleUsersRoutingModule } from './role-users-routing.module';
import { RoleUsersComponent } from './components/role-users/role-users.component';


@NgModule({
  declarations: [RoleUsersComponent],
  imports: [
    CommonModule,
    RoleUsersRoutingModule
  ]
})
export class RoleUsersModule { }
