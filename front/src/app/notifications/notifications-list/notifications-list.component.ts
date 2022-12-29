import { Component, OnInit } from '@angular/core';
import { NotificationsListService } from './notifications-list.service';
import { OrganizerNotification } from 'src/app/models/OrganizerNotification.model';
import { StatusTypes } from '../statusTypesEnum/StatusTypes.model';

@Component({
  selector: 'app-notifications-list',
  templateUrl: './notifications-list.component.html',
  styleUrls: ['./notifications-list.component.css']
})
export class NotificationsComponent implements OnInit {
  notificationsList: OrganizerNotification[] = [];

  constructor(private notifServiceList : NotificationsListService) { }

  ngOnInit(): void {
    this.subscribeToNotificationsReceiver();
    this.subscribeToNotificationToDelete();
  }

  public subscribeToNotificationsReceiver() {
    this.notifServiceList.getNotification().subscribe((not) => {
      this.notificationsList.push(not);
    })
  }

  public subscribeToNotificationToDelete() {
    this.notifServiceList.getNotificationToDelete().subscribe((notifToDelete) => {
      this.removeFromArray(this.notificationsList, notifToDelete);
    });
  }

  public removeFromArray(myArray: Array<OrganizerNotification>, key: OrganizerNotification) {
    const index = myArray.indexOf(key, 0);
    if (index > -1) {
      myArray.splice(index, 1);
    }
  }
}
