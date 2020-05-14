import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './../../material/material.module';

import { GeneralParameterRoutingModule } from './general-parameter-routing.module';
import { GeneralParameterComponent } from './components/general-parameter/general-parameter.component';
import { GeneralParameterListComponent } from './components/general-parameter-list/general-parameter-list.component';
import { GeneralParameterService } from './../../core/services/general-parameter/general-parameter.service';


@NgModule({
  declarations: [
    GeneralParameterComponent,
    GeneralParameterListComponent
  ],
  imports: [
    CommonModule,
    GeneralParameterRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    GeneralParameterService
  ]
})
export class GeneralParameterModule { }
