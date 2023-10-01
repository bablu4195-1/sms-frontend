import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { webSocket, WebSocketSubject } from 'rxjs/webSocket';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StockSocketsService {

  socket$: WebSocketSubject<any> | undefined;
  stockList$: Observable<any> | undefined;
  constructor() { }


getStocks(messageItems:any): Observable<any> {
  this.socket$ = webSocket(`wss://ws.kite.trade?api_key=${environment.kite_api_key}&access_token=${environment.kite_access_token}`);
  this.stockList$ = this.socket$.asObservable();
  this.socket$.next({a:"mode",v:["full",messageItems]});
  return this.stockList$;
}

sendStocks(data: any) {
  this.socket$?.next(data);
}

closeStocks() {
  this.socket$?.complete();
}

}
