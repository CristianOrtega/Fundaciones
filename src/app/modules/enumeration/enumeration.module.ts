import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnumerationRoutingModule } from './enumeration-routing.module';
import { EnumerationListComponent } from './component/enumeration-list/enumeration-list.component';
import { EnumerationDetailComponent } from './component/enumeration-detail/enumeration-detail.component';
import { EnumerationSearchComponent } from './component/enumeration-search/enumeration-search.component';
import { EnumerationComponent } from './component/enumeration/enumeration.component';
import { MaterialModule } from './../../material/material.module';


@NgModule({
  declarations: [
    EnumerationListComponent, 
    EnumerationDetailComponent, 
    EnumerationSearchComponent, 
    EnumerationComponent],
  imports: [
    CommonModule,
    EnumerationRoutingModule,
    MaterialModule
  ]
})
export class EnumerationModule { }
