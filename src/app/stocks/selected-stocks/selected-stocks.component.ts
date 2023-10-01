import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { StocksService } from 'src/app/services/stocks/stocks.service';
import { AlertPriceComponent } from '../alert-price/alert-price.component';

@Component({
  selector: 'app-selected-stocks',
  templateUrl: './selected-stocks.component.html',
  styleUrls: ['./selected-stocks.component.scss']
})
export class SelectedStocksComponent implements OnInit {
  
  selectedStocks:any = [];
    constructor(private stocks: StocksService,private dialog: MatDialog) { }
  
    ngOnInit(): void {
      this.selectedStocksList();
    }

  selectedStocksList(){
    this.stocks.selectedStocks().subscribe((res:any)=>{
      console.log(res);
      this.selectedStocks = res;
    });
  }

  round(value:any, precision:any) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  alertPrice(stocks:any){
    //dialog box
   this.dialog.open(AlertPriceComponent,{
      width:'500px',
      height:'500px',
      data:stocks,
    });

    this.dialog.afterAllClosed.subscribe((res:any)=>{
      this.selectedStocksList();
    });
  }
}
