import { Component, Input, OnInit } from '@angular/core';
import { Notification } from '../notification-model/Notification.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notificationObject!: Notification;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.setTimeoutToRemove();
  }

  public setTimeoutToRemove() {
    const myTimeout = setTimeout(() => {
      this.sendRemoveNotificationRequest(this.notificationObject);
    }, 5000);
  }

  public sendRemoveNotificationRequest(notificationObjectToRemove: Notification) {
    this.notificationService.emitRemoveNotificationRequest(notificationObjectToRemove);
  }
}
