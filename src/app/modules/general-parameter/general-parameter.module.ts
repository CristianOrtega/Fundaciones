import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralParameterRoutingModule } from './general-parameter-routing.module';
import { GeneralParameterComponent } from './components/general-parameter/general-parameter.component';


@NgModule({
  declarations: [GeneralParameterComponent],
  imports: [
    CommonModule,
    GeneralParameterRoutingModule
  ]
})
export class GeneralParameterModule { }
