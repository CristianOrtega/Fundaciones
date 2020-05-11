import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExternalcodeModule } from './externalcode.module';


const routes: Routes = [
  {
    path: '',
    component: ExternalcodeModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExternalcodeRoutingModule { }
