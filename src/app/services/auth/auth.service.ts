import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentMessage= new BehaviorSubject<any>(null);
  url = environment.apiEndpoint;
  constructor(private http:HttpClient,private afMessaging: AngularFireMessaging) { }
  login(data:any){
    //take api from environments
    return this.http.post(`${this.url}/login`,data);
  }

 
}
