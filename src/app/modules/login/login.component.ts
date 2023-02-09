import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: string | null;
  formularioLogin: FormGroup = this.formBuilder.group({
    username: new FormControl(''),
    password: new FormControl(''),
  });
  constructor(
    private formBuilder: FormBuilder,
    private readonly router: Router,
  ) {    this.error = null;}

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
}
