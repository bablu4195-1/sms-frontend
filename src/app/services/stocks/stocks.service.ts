import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  url = environment.apiEndpoint;
  constructor(private http: HttpClient) { }
  getNSEStocks():Observable<any>{
    return this.http.get(`${this.url}/stocks/nse`);
  }
  getBSEStocks():Observable<any>{
    return this.http.get(`${this.url}/stocks/bse`);
  }

  sendStocks(data:any){
    return this.http.post(`${this.url}/stocks/selectedItems`,data);
  }

  selectedStocks(){
    let id = localStorage.getItem('user_id'); 
    return this.http.get(`${this.url}/stocks/selectedStocks/${id}`);
  }

  addPrice(data:any){
    return this.http.post(`${this.url}/stocks/addPrice`,data);
  }
  
  alertedStocks(){
    let id = localStorage.getItem('user_id'); 
    return this.http.get(`${this.url}/stocks/alertedPrices/${id}`);
  }

  getfirebaseTokens(data:any) {
    return this.http.post(`${this.url}/stocks/getfirebaseTokens`,data);
  }
}
