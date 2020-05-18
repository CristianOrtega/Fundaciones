import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavbarComponent } from './components/navbar/navbar.component';
import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { StatusExecutionDirective } from './directives/execution/status-execution.directive';
import { DateFormatPipe } from './pipes/date-grid/date-format.pipe';


@NgModule({
  declarations: [
    NavbarComponent,
    StatusExecutionDirective,
    DateFormatPipe
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    StatusExecutionDirective,
    DateFormatPipe
  ]
})
export class SharedModule { }
