import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = environment.apiEndpoint;
  constructor(private http:HttpClient) { }
  login(data:any){
    //take api from environments
    return this.http.post(`${this.url}/login`,data);
  }
}
