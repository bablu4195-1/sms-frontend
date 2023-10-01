import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StockSocketsService } from 'src/app/services/websockets/stock-sockets.service';

@Component({
  selector: 'app-stocks-view',
  templateUrl: './stocks-view.component.html',
  styleUrls: ['./stocks-view.component.scss']
})
export class StocksViewComponent implements OnInit {
 p = 2;
 constructor(private router: Router) { }
 ngOnInit() {

 }

// navigate() {
//   this.router.navigate(['stocks/selected-stocks']);
// }

}
