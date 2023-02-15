import { Component, OnInit } from '@angular/core';
import {BubblesComponent} from 'src/app/layout/bubbles/bubbles.component';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  card: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
  constructor(    private readonly router: Router,
    public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  onRegister(){
    this.router.navigate(['/Register']);
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '550px',
    });
  }
  onLogin(){
    this.router.navigate(['/Login']);
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px',
    });
  }
}
