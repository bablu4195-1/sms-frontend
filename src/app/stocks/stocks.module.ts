import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { BseListComponent } from './bse-list/bse-list.component';
import { NseListComponent } from './nse-list/nse-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';
import { StocksViewComponent } from './stocks-view/stocks-view.component';
import { SelectedStocksComponent } from './selected-stocks/selected-stocks.component';
import {MatDialogModule} from '@angular/material/dialog';
import { AlertPriceComponent } from './alert-price/alert-price.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StocksService } from '../services/stocks/stocks.service';
import { SharedModule } from '../shared/shared/shared.module';

@NgModule({
  declarations: [
    BseListComponent,
    NseListComponent,
    StocksViewComponent,
    SelectedStocksComponent,
    AlertPriceComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule,
    MatDialogModule,
    ReactiveFormsModule,
    FormsModule,
    SharedModule
  ],
  exports:[
    BseListComponent,
    NseListComponent,
    StocksViewComponent,
    // AlertPriceComponent
  ],
  providers:[StocksService]
})
export class StocksModule { }
