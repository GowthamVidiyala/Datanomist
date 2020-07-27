import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:8089/employees';

  constructor(private http: HttpClient) { }

  getEmployee(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  updateEmployee(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}


/*
import { Employee } from './employee.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { Subject, Observable } from "rxjs";

@Injectable({ 
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) { }

  CreateURL='http://localhost:8089/create';
  sendEmployeeData(data : Employee):Observable<any>
  {

    const idToken = sessionStorage.getItem("token"); 
    const idLocalToken = localStorage.getItem("JWT");

    // let headers = new Headers({'Content-Type': 'application/json'});  
    // headers.append('Authorization','Bearer '+idToken)
    
    // console.log("Employee Service",sessionStorage.getItem);
    // console.log(headers);
    console.log(idToken);
    return this.http.post  (this.CreateURL,data);
  }
}

*/