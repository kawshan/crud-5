import { Injectable } from '@angular/core';
import {EmployeeModel} from "./employee.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(public httpClient: HttpClient) { }

  api:string="http://localhost:8080";

  public saveEmployee(employee: EmployeeModel) :Observable<EmployeeModel> {
   return this.httpClient.post<EmployeeModel>(`${this.api}/save/employee`, employee);
  }


}
