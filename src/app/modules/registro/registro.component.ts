import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DepartamentosService } from 'src/app/service/departamentos.service';
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
  municipios: any[] = []
  departamentos: any = []
  selectedMunicipio = null

  myForm: FormGroup = this.formBuilder.group({
    email: [null, Validators.required],
    confirmEmail: [null, Validators.required],
    password: [null, Validators.required],
    confirmpassword: [null, Validators.required],

    municipio: [null, Validators.required],

  })

  constructor(public dialogRef: MatDialogRef<HeaderComponent>,
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
