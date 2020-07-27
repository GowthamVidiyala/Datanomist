import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, Observable } from "rxjs";
import { Registration } from './Registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  // private registrationData = new Subject<Registration>();
  // registrationDataOb$= this.registrationData.asObservable();

  URL='http://localhost:8089/register';
  constructor(private http: HttpClient) { }
 
  sendRegisterData(data : Registration):Observable<any>
  {
    console.log("Refistration Service");
    console.log(data);
    // this.registrationData.next(data);
    return this.http.post(this.URL,data);
  //  return this.http.get("https://localhost:8444/getAllTasks", { responseType: 'json' });
  }
}
