import { EmployeeDetailsComponent } from './dashboard/employee-details/employee-details.component';
import { UpdateEmployeeComponent } from './dashboard/update-employee/update-employee.component';
import { CreateEmployeeComponent } from './dashboard/create-employee/create-employee.component';
import { EmployeeListComponent } from './dashboard/employee-list/employee-list.component';

import { AppComponent } from './app.component';
import { MainComponentComponent } from './main-component/main-component.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'dashboard/employees', component: EmployeeListComponent },
  { path: 'dashboard/add', component: CreateEmployeeComponent },
  { path: 'dashboard/update/:id', component: UpdateEmployeeComponent },
  { path: 'dashboard/details/:id', component: EmployeeDetailsComponent },
  {path : 'dashboard', component : DashboardComponent},
  {path : 'registration', component : MainComponentComponent},
  {path : 'login',  component : MainComponentComponent},
  {path : '', redirectTo: '/login' , pathMatch: 'full'},
  {path : '**', component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 