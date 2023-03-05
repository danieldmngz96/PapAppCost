import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/services/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginForm!: FormGroup;
  hide = true;
  constructor(
    private service: LoginService
  ) {}

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required],
      ),
    });
  }

  login() {
    let body = {
      email_user: this.loginForm.controls['username'].value,
      password_user: this.loginForm.controls['password'].value,
    };
    console.log(body);
    
    this.service.login(body).subscribe((resp: any) => {
      console.log(typeof(resp), resp);
      if(typeof(resp) === 'string'){
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Correo o contraseña invalida!',
        });
        localStorage.clear();
      } else if(typeof(resp) === 'object'){
        console.log('login...');
        localStorage.setItem("user", JSON.stringify(resp));        
      }
    }, (error: any) => {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Correo o contraseña invalida!',
      });
    });
  }

}
