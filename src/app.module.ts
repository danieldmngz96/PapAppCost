import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutComponent } from './app/layout/layout.component';
import { AppComponent } from './app/app.component';
import { MaterialModule } from './app/material/material.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './app/shared/header/header.component';
import { FooterComponent } from './app/shared/footer/footer.component';




@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
   ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
