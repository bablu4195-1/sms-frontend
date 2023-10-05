import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StocksService } from 'src/app/services/stocks/stocks.service';
import { StockSocketsService } from 'src/app/services/websockets/stock-sockets.service';

@Component({
  selector: 'app-nse-list',
  templateUrl: './nse-list.component.html',
  styleUrls: ['./nse-list.component.scss']
})
export class NseListComponent implements OnInit {
NSEStocks:any = [];
p = 1;
selectedItems:any = [];
alertStocks:any = [];
constructor(private stocks:StocksService,private stockSocket: StockSocketsService){}
ngOnInit(){
 this.getNSEStocks();
//  this.getStocks();
this.alertedStocks();
}

getNSEStocks(){
  this.stocks.getNSEStocks().subscribe((res:any)=>{
    console.log(res);
    this.NSEStocks = res;
  },(err:any)=>{
    console.log(err);
  });

}

addingItems(data:any,i:any) {
  // console.log(data);
  data.isSelected = true;
  this.selectedItems.push(data['instrument_token']);
  console.log(this.selectedItems);
}

saveTOSend(){
  let data = {
     items : this.selectedItems,
     user_id: localStorage.getItem('user_id'),
     exchange:'NSE'
  }
  this.stocks.sendStocks(data).subscribe((res:any)=>{
    console.log(res);
  });
}

alertedStocks() {
  this.stocks.alertedStocks().subscribe((res:any)=>{
    console.log(res);
    this.alertStocks = res;
  });
}

checkAlertedStocks(i:any){
  let data = this.NSEStocks[i];
  let index = this.alertStocks.findIndex((res:any)=>{
    return res.instrument_token == data.instrument_token;
  });
  if(index != -1){
    return true;
  }
  else{
    return false;
  }
}
}
