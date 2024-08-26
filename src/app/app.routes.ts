import { Routes } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {HomeComponent} from "./home/home.component";
import {EmployeeComponent} from "./employee/employee.component";

export const routes: Routes = [
  {path:'header',component:HeaderComponent},
  {path:'',component:HomeComponent},
  {path:'employee',component:EmployeeComponent},
];
