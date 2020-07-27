import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-component',
  templateUrl: './main-component.component.html',
  styleUrls: ['./main-component.component.css']
})
export class MainComponentComponent implements OnInit {
  registrationStatus : String;
  loginStatus : String;  
  constructor() { }

  ngOnInit(): void {
  }
  loginPage : boolean=true;

  onLoginPage()
  {
    this.loginPage=true;
      console.log("Login Page Clicked");
  }

  onRegistrationPage()
  {
    this.loginPage=false;
    console.log("Registration Page Clicked");
    FormData
  }

  isRegistrationSuccess(event: String)
  {
    this.registrationStatus=event;
    console.log("Registration status"+this.registrationStatus);
    if(this.registrationStatus.match("Registration Successful"))
      {this.loginPage=true;
      }
      else{
        this.registrationStatus+=" Please try again later or contact:gowtham.vidiyala@gmail.com";
      }
  }

  isLoginFailue(event: String)
  {
    this.loginStatus=event;
  }
}
