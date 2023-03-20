import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActividadesComponent } from './actividades.component';
import { ActividadesRoutingModule } from './actividades-rounting.module';
import { MaterialModule } from 'src/app/shared/material/material.module';
import { MenuModule } from 'src/app/shared/menu/menu.module';
import { MenuComponent } from 'src/app/shared/menu/menu.component';
import { FooterModule } from 'src/app/shared/footer/footer.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';

@NgModule({
  imports: [
    CommonModule,
    ActividadesRoutingModule,
    MaterialModule,
    MenuModule,
    FooterModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule
  ],
  declarations: [ActividadesComponent]
})
export class ActividadesModule { }
