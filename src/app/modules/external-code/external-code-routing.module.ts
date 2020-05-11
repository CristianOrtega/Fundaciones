import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalCodeModule } from './external-code.module';


const routes: Routes = [
  {
    path: '',
    component: ExternalCodeModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalCodeRoutingModule { }
