import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentosService } from 'src/app/services/departamentos.service';

interface departament {
  value: string;
}
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent implements OnInit {
  municipios: any[] = []
  departamentos: any = []
  selectedMunicipio = null
  niveles: any[] = [
    {id:"No tiene", name:"No tiene"},
    {id:"Primaria", name:"Primaria"},
    {id:"Bachiller", name:"Bachiller"},
    {id:"Tecnico", name:"Tecnico"},
    {id:"Tecnologo", name:"Tecnologo"},
    {id:"Universitario", name:"Universitario"}
  ];

  myForm: FormGroup = this.formBuilder.group({
    email_user: ['', Validators.required],
    email_user_confirm: ['', Validators.required],
    password_user: ['', Validators.required],
    password_user_confirm: ['', Validators.required],
    name_user: ['', Validators.required],
    nickname_user: ['', Validators.required],
    country_user: ['Colombia'],
    province_user: ['', Validators.required],
    city_user: ['', Validators.required],
    birth_date_user: ['', Validators.required],
    level_studies_user: ['', Validators.required]    
  })

  constructor(public dialogRef: MatDialogRef<RegistroComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private service: DepartamentosService
  ) { }


  ngOnInit(): void {
    this.service.getDepartamentos().subscribe(data => {
      this.departamentos = data
      console.log(this.departamentos);
    });
  }
  onNoClick(): void {
    this.dialogRef.close();
  }

  lookForDepartamentos(event: any) {
    console.log(event);
 /*    console.log(this.departamentos); */
    this.service.getMunicipiosporDepartamento(event.value).subscribe(data => {
      this.municipios = data;
      console.log(data);

    }
    )
  }
}
