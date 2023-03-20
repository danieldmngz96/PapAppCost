import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
interface Food {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-actividades',
  templateUrl: './actividades.component.html',
  styleUrls: ['./actividades.component.scss']
})
export class ActividadesComponent implements OnInit {

  isLinear = false;
  fecha = new Date();
  foods: Food[] = [
    {value: 'terreno-1', viewValue: 'hectárea'}
  ];
  name: any = '';

  //FormGroup de los steps
  stepOneForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
  });

  stepTwoForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required, Validators.pattern(/^\d{10}$/)]),
  });

  constructor(private router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
    this.fecha = new Date();
  }

  saveForm(){

  }

}
