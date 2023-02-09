import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { WelcomeComponent } from './welcome.component';



@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
