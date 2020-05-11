import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalCodeRoutingModule } from './external-code-routing.module';

import { ExternalCodeComponent } from './components/external-code/external-code.component';


@NgModule({
  declarations: [
    ExternalCodeComponent
  ],
  imports: [
    CommonModule,
    ExternalCodeRoutingModule
  ]
})
export class ExternalCodeModule { }
