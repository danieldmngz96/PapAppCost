import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RegistroComponent } from './registro.component';
import { RegisterRoutingModule } from './register-routing.module';
import { AppComponent } from 'src/app/app.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    ReactiveFormsModule
  ],
  exports: [RegistroComponent]
})
export class RegistroModule { }
