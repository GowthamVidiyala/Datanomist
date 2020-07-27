import { LoginService } from './login.service';
import { logindetails } from './logindetails';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private LoginService : LoginService, private router: Router) { }

  @Output() emitLoginResult = new EventEmitter(); 

  //Password Icon 
  hide = true;

  patientDetails : logindetails  = {
    name :"",  
    password :""
  }
  ngOnInit(): void {
  }

  onLoginSubmit(data)
  {
    this.patientDetails = data;
    console.log(this.patientDetails);
    sessionStorage.setItem("token", "login");
    this.LoginService.checkValidation(this.patientDetails).subscribe(
      response => {
        //  isRegistrationSuccess = true;
        sessionStorage.setItem("token","Bearer "+response.token);
        sessionStorage.setItem("username", this.patientDetails.name);
        sessionStorage.setItem("password", this.patientDetails.password);
        // localStorage.setItem("JWT",response.token);
        // console.log("Login Successs Bro",response.token)
        this.router.navigate(['/dashboard']);
        
      },
       error => {
//        isRegistrationSuccess = false; 
    this.emitLoginResult.emit("Invalid Login Credentials");
        console.log("Error occured at Login",error) 
        this.router.navigate(['/login']);

      }
    )

  } 

}

