import { Component, OnInit } from '@angular/core';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  form = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')]]
  });
  submitted = false;
  constructor(private readonly router: Router,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private http: HttpClient) {

  }

  ngOnInit(): void {
  }
  get f() { return this.form.controls; }
  onRegister() {
    this.router.navigate(['/Register']);
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '550px',
    });
  }
  onLogin() {
    this.router.navigate(['/auth/Login']);
   /*  const dialogRef = this.dialog.open(LoginComponent, {
      width: '550px',
    });
 */  }
  get isNameUserInvalid() {
    return this.form.touched && this.form.invalid;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
      if (this.form.valid) {
        this.http.post('https://web-services-papappcost-umb.onrender.com/login/signup', this.form.value)?.subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
      }

    }
  }

