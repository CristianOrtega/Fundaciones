import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { MaterialModule } from './../../material/material.module';

import { EnumerationRoutingModule } from './enumeration-routing.module';
import { EnumerationListComponent } from './component/enumeration-list/enumeration-list.component';
import { EnumerationDetailComponent } from './component/enumeration-detail/enumeration-detail.component';
import { EnumerationComponent } from './component/enumeration/enumeration.component';

import { EnumerationService } from 'src/app/core/services/enumeration/enumeration.service';



@NgModule({
  declarations: [
    EnumerationListComponent, 
    EnumerationDetailComponent,  
    EnumerationComponent],
  imports: [
    CommonModule,
    EnumerationRoutingModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [
    EnumerationService
  ]

})
export class EnumerationModule { }
