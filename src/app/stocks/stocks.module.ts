import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StocksRoutingModule } from './stocks-routing.module';
import { BseListComponent } from './bse-list/bse-list.component';
import { NseListComponent } from './nse-list/nse-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import {MatTableModule} from '@angular/material/table';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    BseListComponent,
    NseListComponent
  ],
  imports: [
    CommonModule,
    StocksRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    NgxPaginationModule
  ]
})
export class StocksModule { }
