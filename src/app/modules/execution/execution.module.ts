import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionRoutingModule } from './execution-routing.module';
import { ExecutionComponent } from './components/execution/execution.component';
import { MaterialModule } from './../../material/material.module';
import { ExecutionListComponent } from './components/execution-list/execution-list.component';
import { ExecutionDetailComponent } from './components/execution-detail/execution-detail.component';


@NgModule({
  declarations: [ExecutionComponent, ExecutionListComponent, ExecutionDetailComponent],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    MaterialModule
  ]
})
export class ExecutionModule { }
