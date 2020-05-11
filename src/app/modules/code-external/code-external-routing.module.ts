import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CodeExternalModule } from './code-external.module';


const routes: Routes = [
  {
    path: '',
    component: CodeExternalModule
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeExternalRoutingModule { }
