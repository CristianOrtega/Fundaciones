import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeExternalRoutingModule } from './code-external-routing.module';
import { CodeExternalComponent } from './components/code-external/code-external.component';


@NgModule({
  declarations: [CodeExternalComponent],
  imports: [
    CommonModule,
    CodeExternalRoutingModule
  ]
})
export class CodeExternalModule { }
