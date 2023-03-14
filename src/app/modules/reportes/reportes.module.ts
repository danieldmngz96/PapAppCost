import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReportesComponent } from './reportes.component';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { ReportesRoutingModule } from './reportes-rounting.module';
import { FooterModule } from 'src/app/shared/footer/footer.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReportesRoutingModule,
    MenuModule,
    FooterModule
  ],
  declarations: [ReportesComponent]
})
export class ReportesModule { }
