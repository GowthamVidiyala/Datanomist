import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../employee.service';
import { EmployeeComponent } from './../employee/employee.component';
import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { Router } from '@angular/router';

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"]
})
export class EmployeeListComponent implements OnInit {
  employees: Observable<Employee[]>;

  constructor(private employeeService: EmployeeService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateEmployeeDetails(id: number){
    this.router.navigate(['dashboard/update', id]);
  }


  employeeDetails(id: number){
    this.router.navigate(['dashboard/details', id]);
  }
}
