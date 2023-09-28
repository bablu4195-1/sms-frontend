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
}
