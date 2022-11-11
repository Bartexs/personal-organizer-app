import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-success-notification',
  templateUrl: './success-notification.component.html',
  styleUrls: ['./success-notification.component.css']
})
export class SuccessNotificationComponent implements OnInit {
  @Input() message!: {messageContent: string, objectType: string};

  constructor() { }

  ngOnInit(): void {
  }

}
