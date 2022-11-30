import { Injectable } from '@angular/core';
import { Notification } from '../notification-model/Notification.model';
import { NotificationsListService } from '../notifications-list/notifications-list.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifServiceList : NotificationsListService) { 

  }

  public emitRemoveNotificationRequest(notificationObjectToRemove: Notification) {
    this.notifServiceList.setNotificationToDelete(notificationObjectToRemove);
  }
}
