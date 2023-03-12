import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
  name: any;

  constructor() { }

  ngOnInit() {
    const data = localStorage.getItem('user');
    this.name = JSON.parse(data || '');
  }

}
