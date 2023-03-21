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
  stepOneFormOne = true;
  //FormGroup de los steps
  stepOneForm = new FormGroup({
    nameCultivo: new FormControl('', Validators.required),
    dateCultivo: new FormControl('', Validators.required),
    mumberHectaria : new FormControl('', Validators.required),
    checkMachine: new FormControl('', Validators.required),
  });

  stepTwoForm = new FormGroup({
    preparacionSuelo: new FormControl('', Validators.required),
    siembraCultivo: new FormControl('', Validators.required),
    laboresCultivo: new FormControl('', Validators.required),
    cosecha: new FormControl('', Validators.required),
    empaqueCultivo: new FormControl('', Validators.required),
    machineOne : new FormControl('', Validators.required),
    machineTwo : new FormControl('', Validators.required),
    machineThere : new FormControl('', Validators.required),
    machineFour : new FormControl('', Validators.required),
    machineFive : new FormControl('', Validators.required),
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
