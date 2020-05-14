import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExecutionComponent } from './components/execution/execution.component';


const routes: Routes = [
  {
    path:'',
    component: ExecutionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExecutionRoutingModule { }
