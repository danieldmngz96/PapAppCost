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




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    AppComponent,
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
    HomeRoutingModule,
    RegisterRoutingModule,
    ReactiveFormsModule
   ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
