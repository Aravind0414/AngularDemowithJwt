import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ngtrack',
  templateUrl: './ngtrack.component.html',
  styleUrls: ['./ngtrack.component.css']
})
export class NgtrackComponent implements OnInit {

  Employees:any[];
  selectedValue: string= 'U001'; 

  constructor() {
    this.Employees = [
      { userId: "U001", jobTitleName: "Architect", firstName: "Aravind", lastName: "Garre", Email:"ara@gmail.com",City:"Bangalore",Age:23,Date:"17/02/2021" },
      { userId: "U002", jobTitleName: "SeniorDeveloper", firstName: "Raj", lastName: "ding",Email:"ara@gmai2l.com",City:"Bangalore",Age:24,Date:"18/02/2021" },
      { userId: "U003", jobTitleName: "Program Directory", firstName: "Tom", lastName: "C",Email:"ara@gmail2.com",City:"Bangalore",Age:26,Date:"19/02/2021" },
    ];


   }

  ngOnInit(): void {
  }

  getEmployess(): void {
    this.Employees = [
      { userId: "U001", jobTitleName: "Architect", firstName: "Aravind", lastName: "Garre", Email:"ara@gmail.com",City:"Bangalore",Age:23,Date:"17/02/2021" },
      { userId: "U002", jobTitleName: "SeniorDeveloper", firstName: "Raj", lastName: "ding",Email:"ara@gmai2l.com",City:"Bangalore",Age:24,Date:"18/02/2021" },
      { userId: "U003", jobTitleName: "Program Directory", firstName: "Tom", lastName: "C",Email:"ara@gmail2.com",City:"Bangalore",Age:26,Date:"19/02/2021" },
      { userId: "U004", jobTitleName: "Manager", firstName: "Extra Employee", lastName: "G",Email:"ara@gmai2l.com",City:"Bangalore",Age:27,Date:"20/02/2021" }

    ];

    
  }

  trackByUserId(index:number,employee:any):string{

    return employee.userId;
  }

}
