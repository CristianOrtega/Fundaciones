import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralParameterRoutingModule } from './general-parameter-routing.module';
import { GeneralParameterComponent } from './components/general-parameter/general-parameter.component';
import { MaterialModule } from './../../material/material.module';


@NgModule({
  declarations: [
    GeneralParameterComponent
  ],
  imports: [
    CommonModule,
    GeneralParameterRoutingModule,
    MaterialModule
  ]
})
export class GeneralParameterModule { }
