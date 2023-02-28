import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  foods: Food[] = [
    {value: 'terreno-0', viewValue: 'm2'},
    {value: 'terreno-1', viewValue: 'hectárea'},
    {value: 'terreno-2', viewValue: 'Fanegada'},
  ];

  constructor( private router: Router,) { }

  ngOnInit(): void {
  }
  nextPage(){
    this.router.navigate(['/Activity']);
  }
}
