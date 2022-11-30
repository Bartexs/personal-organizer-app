import { Component, OnInit } from '@angular/core';
import { NotificationsListService } from './notifications-list.service';
import { NotificationService } from '../notification/notification.service';
import { Notification } from '../notification-model/Notification.model';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationsList: Notification[] = [];

  constructor(private notifServiceList : NotificationsListService, private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.subscribeToNotificationsReceiver();
    this.subscribeToNotificationToDelete();
  }

  public subscribeToNotificationsReceiver() {
    this.notifServiceList.getNotification().subscribe((notif) => {
      this.notificationsList.push(notif);
    })
  }

  public subscribeToNotificationToDelete() {
    this.notifServiceList.getNotificationToDelete().subscribe((notifToDelete) => {
      this.removeFromArray(this.notificationsList, notifToDelete);
    });
  }

  public removeFromArray(myArray: Array<Notification>, key: Notification) {
    const index = myArray.indexOf(key, 0);
    if (index > -1) {
      myArray.splice(index, 1);
    }
  }
}
