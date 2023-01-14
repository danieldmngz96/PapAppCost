import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HeaderComponent } from 'src/app/shared/header/header.component';
interface departament {
  value: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  myForm:FormGroup = this.formBuilder.group({
    email: [Validators.required]

  })

  constructor( public dialogRef: MatDialogRef<HeaderComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder) { }
    Departamentos:departament[] = [
      {value: 'Amazonas'},
      {value: 'Vichada'},
      {value: 'Caquetá'},
      {value: 'Meta'},
      {value: 'Guainía'},
      {value: 'Antioquia'},
      {value: 'Vaupés'},
      {value: 'Guaviare'},
      {value: 'Chocó'},
      {value: 'Casanare'},
      {value: 'Nariño'},
      {value: 'Santander'},
      {value: 'Cauca'},
      {value: 'Bolívar'},
      {value: 'Córdoba'},
      {value: 'Putumayo'},
      {value: 'Arauca'},
      {value: 'Tolima'},
      {value: 'Boyacá'},
      {value: 'Magdalena'},
      {value: 'Cesar'},
      {value: 'Cundinamarca'},
      {value: 'Valle del Cauca'},
      {value: 'Norte de Santander'},
      {value: 'La Guajira'},
      {value: 'Huila'},
      {value: 'Sucre'},
      {value: 'Caldas'},
      {value: 'Risaralda'},
      {value: 'Atlántico'},
      {value: 'Quindío'},
      {value: 'San Andrés y Providencia'}
    ];

  ngOnInit(): void {
    this.myForm = new FormGroup({
      email: new FormControl('')
    });
  }
  onNoClick():void {
    this.dialogRef.close();
  }
}
