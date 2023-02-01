import { NgModule } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
];


@NgModule({
  imports: [RouterModule.forChild(routes),
  RouterModule.forChild(routes),

  ],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
