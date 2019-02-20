import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './main/home/home.component';
import { LoginComponent } from './main/login/login/login.component';
import { AdminLoginComponent } from './main/login/admin/admin-login/admin-login.component';
import { LoginFormComponent } from './main/login/login-form/login-form.component';
import { AdminHomeComponent } from './main/login/admin/admin-home/admin-home.component';
import { AdminComponent } from './main/login/admin/admin/admin.component';
import { AdminSidebarComponent } from './main/login/admin/admin-sidebar/admin-sidebar.component';
import { AdminHeaderComponent } from './main/login/admin/admin-header/admin-header.component';
import { FacultyLoginComponent } from './main/login/faculty/faculty-login/faculty-login.component';
import { FacultyHomeComponent } from './main/login/faculty/faculty-home/faculty-home.component';
import { StaffLoginComponent } from './main/login/staff/staff-login/staff-login.component';
import { StaffHomeComponent } from './main/login/staff/staff-home/staff-home.component';
import { StudentLoginComponent } from './main/login/student/student-login/student-login.component';
import { StudentHomeComponent } from './main/login/student/student-home/student-home.component';
import { RegisterComponent } from './main/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    LoginFormComponent,
    AdminHomeComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminHeaderComponent,
    FacultyLoginComponent,
    FacultyHomeComponent,
    StaffLoginComponent,
    StaffHomeComponent,
    StudentLoginComponent,
    StudentHomeComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
