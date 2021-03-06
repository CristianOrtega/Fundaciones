import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
