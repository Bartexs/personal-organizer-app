import { Component, OnInit } from '@angular/core';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationMode!: string;

  constructor(private notifService : NotificationService) { }

  ngOnInit(): void {
    this.subscribeToNotificationModeSetter();
  }

  public subscribeToNotificationModeSetter() {
    this.notifService.getNotificationMode().subscribe((notif) => {
      this.notificationMode = notif;
    })
  }
}
