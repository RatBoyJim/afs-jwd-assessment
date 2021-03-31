import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { ClientsComponent } from './home/clients/clients.component';
import { EmployeesComponent } from './home/employees/employees.component';
import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'home/clients', component: ClientsComponent},
      { path: 'home/employees', component: EmployeesComponent}
    ]
  },
  // { path: 'home/clients', component: ClientsComponent},
  // { path: 'home/employees', component: EmployeesComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
