import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { LayoutComponent } from '../layout/layout.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  exports: [
    CommonModule,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ]
})
export class SharedModule { }
