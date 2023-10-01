import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NseListComponent } from './nse-list/nse-list.component';
import { BseListComponent } from './bse-list/bse-list.component';
import { StocksViewComponent } from './stocks-view/stocks-view.component';
import { SelectedStocksComponent } from './selected-stocks/selected-stocks.component';

const routes: Routes = [
  {
   path:'',component:StocksViewComponent
  },
  //lazy loading
  {
    path:'',component:NseListComponent
  },{
    path:'',component:BseListComponent
  },{
    path:'selected-stocks',component: SelectedStocksComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StocksRoutingModule { }
