import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegistroComponent } from '../registro/registro.component';
import { MatDialog } from '@angular/material/dialog';
import { LoginService } from 'src/app/service/login.service';
import swal from'sweetalert2';
interface User {
  username: string;
  [password: string]: any;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  username: any = 'danarturodo@hotmail.com';
  password: any = 'Asas123*';
  //form!: FormGroup;
  loading = false;
  submitted = false;
  form: FormGroup = this.formBuilder.group({
    username: ['', [Validators.required, Validators.email]],
    password: [
      '',
      [
        Validators.required,
        Validators.minLength(8),
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*d)[a-zA-Zd]{8,}$'),
      ],
    ],
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public dialog: MatDialog,
    public loginservice: LoginService
  ) {}
  public saveData(username: string, password: string) {
    localStorage.setItem(username, password);
  }
  public getData(password: string) {
    return localStorage.getItem(password);
  }

  public clearData() {
    localStorage.clear();
  }
  ngOnInit(): void {

  }
  get f() {
    return this.form.controls;
  }
  /*  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  } */
  //redirige a welcome
  goToLogin() {
    this.router.navigate(['/Welcome']);
  }

  @Output() submitEM = new EventEmitter();
  //este on submit es para manejarlo quemado por localstrorage
  onSubmit() {
    // Verificar si el usuario y la contraseña son correctos
    if (this.username  && this.password ) {
      // Almacenar el nombre  y contraseña de usuario en localStorage
      localStorage.setItem('', this.username);
      localStorage.setItem('', this.password);
      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/Welcome']);
    } else {
      // Mostrar un mensaje de error si el usuario y/o la contraseña son incorrectos
      swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Hubo un error usuario o contraseña con son correctos'
      })

    }
  }
  get isNameUserInvalid() {
    return this.form.touched && this.form.invalid;
  }
  /*  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
      if (this.form.valid) {
        this.http.post('https://web-services-papappcost-umb.onrender.com/login/signup', this.form.value)?.subscribe(response => {
          console.log(response);
        }, error => {
          console.log(error);
        });
      }

    } */
  onRegister() {
    this.router.navigate(['/Register']);
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '550px',
    });
  }
  //este metodo es el que se comunica con el microservcio
  login() {
    const user = { username: this.username, password: this.password };
    this.loginservice.login(user).subscribe((data) => {
      console.log(data);

      if (this.form.touched) {
        this.submitted = true;
        return;
      }
    });
  }

  //Obtiene el formControl del login
  getLoginControl(index: number): FormGroup {
    return this.form.controls[index] as FormGroup;
  }
}
