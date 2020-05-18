import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { ExecutionService } from './../../core/services/execution/execution.service';

import { ExecutionRoutingModule } from './execution-routing.module';
import { ExecutionComponent } from './components/execution/execution.component';
import { MaterialModule } from './../../material/material.module';
import { ExecutionListComponent } from './components/execution-list/execution-list.component';
import { ExecutionDetailComponent } from './components/execution-detail/execution-detail.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    ExecutionComponent, 
    ExecutionListComponent, 
    ExecutionDetailComponent,
  ],
  imports: [
    CommonModule,
    ExecutionRoutingModule,
    MaterialModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [
    ExecutionService
  ]
})
export class ExecutionModule { }
