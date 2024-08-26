import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {FormsModule, NgForm} from "@angular/forms";
import {EmployeeModel} from "../employee.model";
import {EmployeeService} from "../employee.service";
import {MatAnchor, MatButton} from "@angular/material/button";

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    MatLabel,
    MatCheckbox,
    MatOption,
    MatSelect,
    FormsModule,
    MatButton,
    MatAnchor
  ],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {


  employee: EmployeeModel = {
    employeeAddress: "",
    employeeContactNUmber: "",
    employeeDepartment: "",
    employeeGender: "",
    employeeId: 0,
    employeeName: "",
    employeeSkills: ""
  }

  skills: string[] = [];


  constructor(private employeeService: EmployeeService) {
  }


  ngOnInit(): void {
  }


  saveEmployee(employeeForm: NgForm): void {
    this.employeeService.saveEmployee(this.employee).subscribe(
      {
        next:(res:EmployeeModel)=>{
          console.log(res);
          employeeForm.reset();
        },
        error:(err:EmployeeModel)=>{
          console.log(err);

        }
      }
    );
  }


}
