import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './welcome.component';
import { AppRoutingModule } from '../app-routing.module';
import { WelcomeRoutingModule } from './welcome-routing.module';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    WelcomeRoutingModule
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
