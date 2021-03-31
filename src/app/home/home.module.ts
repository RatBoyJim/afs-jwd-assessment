import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
      { 
        path: 'home/clients', 
        component: ClientsComponent
      },
      { 
        path: 'home/employees',
        component: EmployeesComponent
      }]


@NgModule({
  declarations: [HomeComponent, ClientsComponent, EmployeesComponent],
  exports: [HomeComponent, RouterModule, AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ]
})
export class HomeModule { }
