import { Component } from '@angular/core';
import { StocksService } from 'src/app/services/stocks/stocks.service';

@Component({
  selector: 'app-bse-list',
  templateUrl: './bse-list.component.html',
  styleUrls: ['./bse-list.component.scss']
})
export class BseListComponent {
  BSEStocks:any = [];
  p = 1;
  selectedItems:any = [];
  alertStocks:any = [];
  constructor(private stocks:StocksService){}
  ngOnInit(){
   this.getBSEStocks();
   this.alertedStocks();
  }
  
  getBSEStocks(){
    this.stocks.getBSEStocks().subscribe((res:any)=>{
      console.log(res);
      this.BSEStocks = res;
    },(err:any)=>{
      console.log(err);
    });
  
  }

  addingItems(data:any,i:any) {
    // console.log(data);
    data.isSelected = true;
    this.selectedItems.push(data['instrument_token']);
  }
  saveTOSend(){
    let data = {
       items : this.selectedItems,
       user_id: localStorage.getItem('user_id'),
       exchange:'BSE'
    }
    this.stocks.sendStocks(data).subscribe((res:any)=>{
      console.log(res);
    });
    this.getBSEStocks();
  }
  alertedStocks() {
    this.stocks.alertedStocks().subscribe((res:any)=>{
      console.log(res);
      this.alertStocks = res;
    });
  }
  
  checkAlertedStocks(i:any){
    let data = this.BSEStocks[i];
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
