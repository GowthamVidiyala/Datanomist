import { Employee } from './../shared/employee.model';
import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id: number;
  employee: Employee;

  constructor(private route: ActivatedRoute,private router: Router,
    private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    console.log("details id"+this.id);
    this.employeeService.getEmployee(this.id)
      .subscribe(data => {
        console.log(data)
        this.employee = data;
      }, error =>{ 
        console.log("EMo")
        console.log(error)});
  }

  list(){
    this.router.navigate(['dashboard/employees']);
  }
}