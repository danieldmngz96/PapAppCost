import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string;
  password: string;
  error: string | null;
  formularioLogin: FormGroup = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {    this.error = null;
   this.username = ""
   this.password = ""
  }



  ngOnInit(): void {

  }
 /*  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  } */
  goToLogin(){
    this.router.navigate(['/Welcome'])
  }

  @Output() submitEM = new EventEmitter();

  onSubmit() {
    // Verificar si el usuario y la contraseña son correctos
    if (this.username === 'usuario' && this.password === 'contraseña') {
      // Almacenar el nombre de usuario en localStorage
      localStorage.setItem('username', this.username);
      // Redirigir al usuario a la página de inicio
      this.router.navigate(['/Login']);
    } else {
      // Mostrar un mensaje de error si el usuario y/o la contraseña son incorrectos
      alert('Nombre de usuario y/o contraseña incorrectos.');
    }
  }
}
