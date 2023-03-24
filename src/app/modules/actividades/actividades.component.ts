import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DatePipe } from '@angular/common';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { ActividadesService } from 'src/app/services/actividades.service';
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
  name_activity: any = []
  machines: any[] = [];
  isLinear = false;
  fecha = new Date();
  name: any = '';
  stepOneFormOne = true;
  onlyNumbers = /^[0-9]+$/;
  //FormGroup de los steps
  stepOneForm = new FormGroup({
    nameCultivo: new FormControl('', Validators.required),
    dateCultivo: new FormControl('', Validators.required),
    mumberHectaria : new FormControl('', [Validators.required, Validators.pattern(this.onlyNumbers)]),
    checkMachine: new FormControl('', Validators.required),
    machineOne : new FormControl('', Validators.required),
    machineTwo : new FormControl('', Validators.required),
    machineThere : new FormControl('', Validators.required),
    machineFour : new FormControl('', Validators.required),
    machineFive : new FormControl('', Validators.required),
    addMachine : new FormControl('', Validators.required),
  });

  stepTwoForm = new FormGroup({
    preparacionSuelo: new FormControl('', Validators.required),
    siembraCultivo: new FormControl('', Validators.required),
    laboresCultivo: new FormControl('', Validators.required),
    cosecha: new FormControl('', Validators.required),
    empaqueCultivo: new FormControl('', Validators.required)
  });

   formAddMachine = new FormGroup({
    checkMachine: new FormControl('', Validators.required),
    machineOneAdd:  new FormControl('', Validators.required),
    machineTwoAdd: new FormControl('', Validators.required),
    machineThereAdd: new FormControl('', Validators.required),
    machineFourAdd:  new FormControl('', Validators.required),
    machineFiveAdd:  new FormControl('', Validators.required),
  });

  constructor(private router: Router,
    private _formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private activity: ActividadesService,
    private fb: FormBuilder) {
 }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
    this.fecha = new Date();

    this.activity.getActividades1().subscribe(data => {
      this.name_activity = data
      console.log(this.name_activity);
    });

    this.activity.getActividades2().subscribe(data => {
      this.name_activity = data
      console.log(this.name_activity);
    });

    this.activity.getActividades3().subscribe(data => {
      this.name_activity = data
      console.log(this.name_activity);
    });

    this.activity.getActividades4().subscribe(data => {
      this.name_activity = data
      console.log(this.name_activity);
    });

    this.activity.getActividades5().subscribe(data => {
      this.name_activity = data
      console.log(this.name_activity);
    });
  }

  saveForm(){

  }
  //tratamos de convertir DD/MM/YYYY a MM/YYYY
  dateCultivo(event: MatDatepickerInputEvent<Date>) {
    const formattedDate = this.datePipe.transform(event.value, 'MM/yyyy');
    this.stepOneForm.get('dateCultivo')?.setValue(formattedDate);
  }


  lookForActivity(event: any) {
    console.log(event);
    this.activity.getActividades1().subscribe(data => {
      this.name_activity = data;
      console.log(data); })
  }

  lookForActivity2(event: any) {
    console.log(event);
    this.activity.getActividades2().subscribe(data => {
      this.name_activity = data;
      console.log(data); })
  }

   lookForActivity3(event: any) {
    console.log(event);
    this.activity.getActividades3().subscribe(data => {
      this.name_activity = data;
      console.log(data); })
  }
  addMachine() {
    for(let i=0; i<10; i++) {
      this.machines.push({});
      const controlName = 'machine' + (i + 6);
    //this.formAddMachine.addControl(controlName, new FormControl('', Validators.required));
    }
  }
}
