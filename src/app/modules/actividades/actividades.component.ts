import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, Validators} from '@angular/forms';
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
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;
  fecha = new Date();
  foods: Food[] = [
    {value: 'terreno-0', viewValue: 'm2'},
    {value: 'terreno-1', viewValue: 'hectárea'},
    {value: 'terreno-2', viewValue: 'Fanegada'},
  ];
  name: any = '';
  constructor(private router: Router,
    private _formBuilder: FormBuilder) { }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
    this.fecha = new Date();
  }

  nextPage(){
    this.router.navigate(['/Activity']);
  }
}
