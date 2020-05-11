import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExchangeRateRoutingModule } from './exchange-rate-routing.module';
import { ExchangeRateComponent } from './components/exchange-rate/exchange-rate.component';


@NgModule({
  declarations: [ExchangeRateComponent],
  imports: [
    CommonModule,
    ExchangeRateRoutingModule
  ]
})
export class ExchangeRateModule { }
