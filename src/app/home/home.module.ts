import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';



@NgModule({
  declarations: [HomeComponent, ClientsComponent, EmployeesComponent],
  exports: [HomeComponent],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
