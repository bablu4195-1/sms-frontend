import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { StocksService } from 'src/app/services/stocks/stocks.service';

@Component({
  selector: 'app-nse-list',
  templateUrl: './nse-list.component.html',
  styleUrls: ['./nse-list.component.scss']
})
export class NseListComponent implements OnInit {
NSEStocks:any = [];
p = 1;

constructor(private stocks:StocksService){}
ngOnInit(){
 this.getNSEStocks();
}

getNSEStocks(){
  this.stocks.getNSEStocks().subscribe((res:any)=>{
    console.log(res);
    this.NSEStocks = res;
  },(err:any)=>{
    console.log(err);
  });

}
}
