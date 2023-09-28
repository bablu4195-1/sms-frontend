import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NseListComponent } from './nse-list/nse-list.component';
import { BseListComponent } from './bse-list/bse-list.component';

const routes: Routes = [
  {
   path:'',component:NseListComponent
  },
  //lazy loading
  {
    path:'nse',component:NseListComponent
  },{
    path:'bse',component:BseListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
