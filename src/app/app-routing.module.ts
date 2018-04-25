import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {EmployeesComponent} from './employees/employees.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'employees', component: EmployeesComponent },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}