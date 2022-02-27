import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/services/notificationservice';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  constructor(private notification:NotificationService) { }

  ngOnInit(): void {
  }

  SavetheData():void{
    this.notification.showInfo('Submitted','Info');
  }

}
