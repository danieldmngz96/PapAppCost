import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ActivityComponent } from './activity/activity.component';
import { DashboardComponent } from './dashboard/dashboard.component';



@NgModule({
  declarations: [
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    WelcomeComponent,
    ActivityComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModulesModule { }
