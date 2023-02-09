import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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
    private formBuilder: FormBuilder
  ) {    this.error = null;}

  ngOnInit(): void {

  }
 /*  submit() {
    if (this.form.valid) {
      this.submitEM.emit(this.form.value);
    }
  } */


  @Output() submitEM = new EventEmitter();
}
