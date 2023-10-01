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
  
  constructor(private stocks:StocksService){}
  ngOnInit(){
   this.getNSEStocks();
  }
  
  getNSEStocks(){
    this.stocks.getBSEStocks().subscribe((res:any)=>{
      console.log(res);
      this.BSEStocks = res;
    },(err:any)=>{
      console.log(err);
    });
  
  }

  addingItems(data:any,i:any) {
    console.log(data);
    data.isSelected = true;
    this.selectedItems.push(data['instrument_token']);
  }
  saveTOSend() {
    console.log(localStorage.getItem('user_id'));
    localStorage.getItem('token');
  }
}
