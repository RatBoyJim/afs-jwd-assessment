import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home/home.component';
import { ClientsComponent } from './clients/clients.component';
import { EmployeesComponent } from './employees/employees.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzTableModule } from 'ng-zorro-antd/table';


@NgModule({
  declarations: [HomeComponent, ClientsComponent, EmployeesComponent],
  exports: [HomeComponent, AppRoutingModule],
  imports: [
    CommonModule,
    AppRoutingModule,
    NzLayoutModule,
    NzBreadCrumbModule,
    NzTableModule
  ]
})
export class HomeModule { }
