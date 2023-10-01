import { Component, Input ,Inject} from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StocksModule } from '../stocks.module';
import { StocksService } from 'src/app/services/stocks/stocks.service';

@Component({
  selector: 'app-alert-price',
  templateUrl: './alert-price.component.html',
  styleUrls: ['./alert-price.component.scss']
})
export class AlertPriceComponent {
    price:any;
    constructor(@Inject(MAT_DIALOG_DATA) public data: any,private stocks: StocksService) { }
    
    ngOnInit(): void {
      this.price = this.data['last_price'];
    } 

    addPrice(price:any){
      let data = {
        price: price,
        instrument_token: this.data['instrument_token'],
        user_id: localStorage.getItem('user_id')
      }
      this.stocks.addPrice(data).subscribe((res:any)=>{
        console.log(res);
      })
    }
}
