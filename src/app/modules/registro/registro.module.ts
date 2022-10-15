import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistroComponent } from './registro.component';
import { RegisterRoutingModule } from './register-routing.module';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
  ],
})
export class RegistroModule { }
