import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property',
  templateUrl: './property.component.html',
  styleUrls: ['./property.component.css']
})
export class PropertyComponent implements OnInit {

  constructor() { } 

  isdisabled:boolean=false;
  imagePath:string="https://angular.io/assets/images/logos/angular/logo-nav@2x.png";
  fullName: string = 'Angular training';
  pageHtml:string='Hello Details';
  
    ngOnInit(): void {
    }

}
