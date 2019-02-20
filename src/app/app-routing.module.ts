import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './main/login/login/login.component';
import { HomeComponent } from './main/home/home.component';
import { AdminLoginComponent } from './main/login/admin/admin-login/admin-login.component';
import { LoginFormComponent } from './main/login/login-form/login-form.component';
import { AdminHomeComponent } from './main/login/admin/admin-home/admin-home.component';
import { FacultyLoginComponent } from './main/login/faculty/faculty-login/faculty-login.component';
import { FacultyHomeComponent } from './main/login/faculty/faculty-home/faculty-home.component';
import { StaffLoginComponent } from './main/login/staff/staff-login/staff-login.component';
import { StaffHomeComponent } from './main/login/staff/staff-home/staff-home.component';
import { StudentLoginComponent } from './main/login/student/student-login/student-login.component';
import { StudentHomeComponent } from './main/login/student/student-home/student-home.component';
import { RegisterComponent } from './main/register/register.component';
const routes: Routes = [
  {
    path: 'log',
    component: LoginComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'adminLogin',
    component: AdminLoginComponent
  },
  {
    path: 'loginForm',
    component: LoginFormComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'adminHome',
    component: AdminHomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'facultyLogin',
    component: FacultyLoginComponent
  },
  {
    path: 'facultyHome',
    component: FacultyHomeComponent
  },
  {
    path: 'staffLogin',
    component: StaffLoginComponent
  },
  {
    path: 'staffHome',
    component: StaffHomeComponent
  },
  {
    path: 'studentLogin',
    component: StudentLoginComponent
  },
  {
    path: 'studentHome',
    component: StudentHomeComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
