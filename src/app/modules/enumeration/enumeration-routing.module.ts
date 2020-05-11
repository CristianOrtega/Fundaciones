import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EnumerationListComponent } from './component/enumeration-list/enumeration-list.component';
import { EnumerationComponent } from './component/enumeration/enumeration.component';


const routes: Routes = [
  {
    path: '',
    component: EnumerationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EnumerationRoutingModule { }
