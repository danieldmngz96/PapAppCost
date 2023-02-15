import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/shared/header/header.component';
import {colombia} from '../registro/JSON/colombia'
interface departament {
  value: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  diccionario = colombia
  municipios = Object.keys(this.diccionario)
  departamentos = []
  selectedMunicipio = null

  myForm:FormGroup = this.formBuilder.group({
    email: [null,Validators.required],
    confirmEmail: [null,Validators.required],
    password: [null,Validators.required],
    confirmpassword: [null,Validators.required],

    municipio:  [null,Validators.required],

  })

  constructor( public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder
    ) { }


  ngOnInit(): void {

    console.log(Object.keys(colombia));

  }
  onNoClick():void {
    this.dialogRef.close();
  }

  lookForDepartamentos() {
    console.log(this.selectedMunicipio);

    this.departamentos = eval(`this.diccionario.${this.selectedMunicipio}`)
  }
}
