import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import {initializeApp} from "firebase/app";
import { getMessaging,getToken} from "firebase/messaging";
import { environment } from 'src/environments/environment';
import { StocksService } from 'src/app/services/stocks/stocks.service';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });
  errorMessage:any = '';
  token:any;
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private stocks: StocksService) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  
  onSubmit() {
    if (this.loginForm.valid) {
      // perform authentication...
      this.authService.login(this.loginForm.value).subscribe((res: any) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('user_id', res.user_id);
        // navigate to stocks nse component
        this.router.navigate(['stocks']);
      }, (err: any) => {
        alert("Error, Please try again");
        console.log(err);
      });
    } else {
      this.errorMessage = "Email or Password Incorrect";
    }
    initializeApp(environment.firebase);
    const messaging = getMessaging();
    getToken(messaging, {vapidKey:environment.firebase.vapidkey}).then((currentToken) => {
      if(currentToken){
        console.log(currentToken);
        localStorage.setItem('fcm_token', currentToken);
        let data = {
          token: currentToken,
          user_id: localStorage.getItem('user_id')
        }
        this.sendFirstToken(data);
      }
      else{
        console.log('No registration token available. Request permission to generate one.');
      }
    }).catch((err) => {
      console.log('An error occurred while retrieving token. ', err);
    });
    
  }
  
  sendFirstToken(data:any){
    this.stocks.getfirebaseTokens(data).subscribe((res:any)=>{
      console.log(res);
    });
  }
 

    }
