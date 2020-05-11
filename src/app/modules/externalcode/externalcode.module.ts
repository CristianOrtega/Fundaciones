import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExternalcodeRoutingModule } from './externalcode-routing.module';
import { ExternalcodeComponent } from './components/externalcode/externalcode.component';


@NgModule({
  declarations: [ExternalcodeComponent],
  imports: [
    CommonModule,
    ExternalcodeRoutingModule
  ]
})
export class ExternalcodeModule { }
