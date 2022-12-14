import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { RegistroComponent } from '../modules/registro/registro.component';
import { RegistroModule } from '../modules/registro/registro.module';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,
  ]
})
export class SharedModule { }
