import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GeneralParameterComponent } from './components/general-parameter/general-parameter.component';


const routes: Routes = [
  {
    path: '',
    component: GeneralParameterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralParameterRoutingModule { }
