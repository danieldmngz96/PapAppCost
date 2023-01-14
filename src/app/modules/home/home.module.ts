import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    AppRoutingModule,
    MaterialModule,
  ],
})
export class HomeModule { }
