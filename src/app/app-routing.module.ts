import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)},
  //{ path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'menu', loadChildren: './menu/menu.module#MenuPageModule',canActivate: [AuthGuard] },
  // { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  // { path: 'transaction', loadChildren: './transaction/transaction.module#TransactionPageModule' },
  // { path: 'operations', loadChildren: './operations/operations.module#OperationsPageModule' },
  // { path: 'commissions', loadChildren: './commissions/commissions.module#CommissionsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
