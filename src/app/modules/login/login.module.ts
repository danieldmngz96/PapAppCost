import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { MaterialModule } from 'src/app/material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginRoutingModule } from './login-routing.module';
import { SwiperModule } from 'swiper/angular';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    SharedModule,
    LoginRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule,
    FormsModule
  ],
  exports: [LoginComponent]
})
export class LoginModule { }
