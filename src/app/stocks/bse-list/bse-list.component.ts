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
}
