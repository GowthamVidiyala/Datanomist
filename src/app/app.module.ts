import { MaterialModule } from './material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { MainComponentComponent } from './main-component/main-component.component'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmployeeComponent } from './dashboard/employee/employee.component';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';
import { CreateEmployeeComponent } from './dashboard/create-employee/create-employee.component';
import { EmployeeDetailsComponent } from './dashboard/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { HttpTokenInterceptor } from './HttpTokenInterceptor'

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    DashboardComponent,
    NotFoundComponent,
    MainComponentComponent,
    EmployeeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent,
    EmployeeDetailsComponent,
    UpdateEmployeeComponent
  ], 
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule, 
    BrowserAnimationsModule,
    MaterialModule 
  ],
  providers: [ { provide: HTTP_INTERCEPTORS, useClass: HttpTokenInterceptor, multi: true} ],
  bootstrap: [AppComponent]
})
export class AppModule { }
