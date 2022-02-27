import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent implements OnInit {

  constructor() { }

  pageHeader:string='Micro Focus';
  imagePath:string="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";

  ngOnInit(): void {
  }

}

