import { HttpClient } from '@angular/common/http';
import { logindetails } from './logindetails';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  LoginURL='http://localhost:8089/authenticate';

  checkValidation(data: logindetails):Observable<any>
  {
    console.log("Login Service");
    console.log(data);
    return this.http.post(this.LoginURL,data);
    
  }
}
