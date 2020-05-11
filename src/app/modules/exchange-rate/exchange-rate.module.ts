import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';
import { MaterialModule } from './../../material/material.module';


@NgModule({
  declarations: [ExchangeRateComponent],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule,
    MaterialModule
  ]
})
export class ExchangeRateModule { }
