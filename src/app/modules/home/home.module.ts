import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { HomeComponent } from './home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SwiperModule } from 'swiper/angular';




@NgModule({
  declarations: [HomeComponent],

  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    SwiperModule
  ],
  exports: [HomeComponent]
})
export class HomeModule { }
