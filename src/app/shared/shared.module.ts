import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { HomeModule } from '../modules/home/home.module';




@NgModule({
  declarations: [
  ],
  exports: [
    CommonModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
    HomeModule
  ]
})
export class SharedModule { }
