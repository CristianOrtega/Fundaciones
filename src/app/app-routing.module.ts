import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';


const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full',
      },
      {
        path: 'enumeration',
        loadChildren: () => import('./modules/enumeration/enumeration.module').then(m => m.EnumerationModule)
      },
      {
        path: 'generalparameter',
        loadChildren: () => import('./modules/general-parameter/general-parameter.module').then(m => m.GeneralParameterModule)
      },
      {
        path: 'exchangerate',
        loadChildren: () => import('./modules/exchange-rate/exchange-rate.module').then(m => m.ExchangeRateModule)
      },
      {
        path: 'users',
        loadChildren: () => import('./modules/role-users/role-users.module').then(m => m.RoleUsersModule)
      },
      {
        path: 'execution',
        loadChildren: () => import('./modules/execution/execution.module').then(m => m.ExecutionModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
