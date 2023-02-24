import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './app/layout/layout.component';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './app/shared/header/header.component';
import { FooterComponent } from './app/shared/footer/footer.component';
import { SharedModule } from './app/shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeRoutingModule } from './app/modules/home/home-routing.module';
import { RegisterRoutingModule } from './app/modules/registro/register-routing.module';
import { ContactoComponent } from './app/modules/contacto/contacto.component';
import { BubblesComponent } from './app/layout/bubbles/bubbles.component';
import { LoginModule } from './app/modules/login/login.module';
import { SwiperModule } from 'swiper/angular';





@NgModule({
  declarations: [
    LayoutComponent,
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BubblesComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    RouterModule,
    AppRoutingModule,
    ReactiveFormsModule,
    SwiperModule
   ],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
