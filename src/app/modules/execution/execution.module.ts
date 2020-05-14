import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExecutionRoutingModule } from './execution-routing.module';
import { ExecutionComponent } from './components/execution/execution.component';
import { MaterialModule } from './../../material/material.module';


@NgModule({
  declarations: [ExecutionComponent],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    MaterialModule
  ]
})
export class ExecutionModule { }
