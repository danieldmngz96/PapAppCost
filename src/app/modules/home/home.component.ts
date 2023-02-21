import { Component, OnInit } from '@angular/core';
import {BubblesComponent} from 'src/app/layout/bubbles/bubbles.component';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  form = this.formBuilder.group({
    username: ["", [Validators.required, Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')]]
  });
  constructor(    private readonly router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder) { }

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
  get isNameUserInvalid() {
    return this.form.touched && this.form.invalid;
  }
}
