import { Component, OnInit, TemplateRef, ViewChild, WritableSignal, signal } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef } from '@angular/material/dialog';
import { StocksService } from 'src/app/services/stocks/stocks.service';
import { AlertPriceComponent } from '../alert-price/alert-price.component';
import { PriceComponent } from 'src/app/shared/shared/price/price.component';
@Component({
  selector: 'app-selected-stocks',
  templateUrl: './selected-stocks.component.html',
  styleUrls: ['./selected-stocks.component.scss']
})

export class SelectedStocksComponent implements OnInit {
  adjustedStocks:any = [];
  selectedStocks:any = [];
  alertStocks:any = [];
  search:any;

  livedata: WritableSignal<Array<any>> = signal([]);
    constructor(private stocks: StocksService,private dialog: MatDialog) { }
    ngOnInit(): void {
      this.alertedPrices();
      this.selectedStocksList();
    }
    alertedPrices(){
      this.stocks.alertedStocks().subscribe((res:any)=>{
        console.log(res);
        this.alertStocks = res;
      });
    }
    selectedStocksList() {
      this.stocks.selectedStocks().subscribe((res: any) => {
        this.selectedStocks = res;
        this.selectedStocks.forEach((data:any)=>{
          let index = this.alertStocks.findIndex((res:any)=>{
            return res.instrument_token == data.instrument_token;
          });
          if(index != -1){
            data['alert_price'] = this.alertStocks[index]['alert_price'];
          }
        });
  
      });
      
    }
  
    round(value:any, precision:any) {
    var multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  alertPrice(stocks:any){
    //dialog box
    // const dialogConfig = new MatDialogConfig();
    // dialogConfig.disableClose = true;
    // dialogConfig.autoFocus = true;
    // dialogConfig.width = "60%";
    // dialogConfig.data= stocks;
    // this.dialog.open(PriceComponent,dialogConfig);
   this.dialog.open(AlertPriceComponent,{
      width:'150px',
      height:'150px',
      autoFocus:false,
      data:stocks,
      position:{top:'-50%',left:'50%'}

    });

    this.dialog.afterAllClosed.subscribe((res:any)=>{
      this.alertedPrices();
      this.selectedStocksList();
    });
  }

 searchStocks(){ 
  if(this.search === ""){
    this.selectedStocksList();
  } else {
    this.adjustedStocks = this.selectedStocks.filter((res:any)=>{
      // console.log(this.search);
      return (res.instrument_token).toString().includes(this.search);
    })
}
this.selectedStocks = this.adjustedStocks;
 }

}
