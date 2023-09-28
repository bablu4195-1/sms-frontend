import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from './auth/authguard.guard';

const routes: Routes = [
  //lazy loading
{path:'',loadChildren:()=>import('./auth/auth.module').then(m => m.AuthModule)},
{path: 'stocks', loadChildren: () => import('./stocks/stocks.module').then(m => m.StocksModule),
canActivate:[authGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
