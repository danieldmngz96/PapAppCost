import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegistroComponent } from 'src/app/modules/registro/registro.component';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  constructor(
    private readonly router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }
  onRegister(){
    //this.router.navigate(['/Register']);
    const dialogRef = this.dialog.open(RegistroComponent, {
      width: '550px',
    });
  }
}
