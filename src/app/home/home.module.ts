import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';


@NgModule({
  declarations: [HomeComponent, ClientsComponent, EmployeesComponent],
  exports: [HomeComponent, AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class HomeModule { }
