import { Employee } from './../shared/employee.model';
import { EmployeeService } from './../shared/employee.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employee : Employee ={
    id:null,
    name : "",
    age: null,
    salary:null
  };

  constructor(private empService : EmployeeService) { }

  ngOnInit(): void {
  }

  onCreateEmployee(data)
  {
    this.employee=data.value;
    // this.empService.sendEmployeeData(this.employee).subscribe(
    //   response =>{
    //     console.log("Employee Registration Successs Bro",response)
    //   },
    //   error =>{
    //     console.log("Employee Registration Falied Bro")
    //   }
    // )
  }
}
