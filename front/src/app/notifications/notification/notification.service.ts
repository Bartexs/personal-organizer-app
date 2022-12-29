import { Injectable } from '@angular/core';
import { OrganizerNotification } from '../../models/OrganizerNotification.model';
import { NotificationsListService } from '../notifications-list/notifications-list.service';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private notifServiceList : NotificationsListService) { 

  }

  public emitRemoveNotificationRequest(notificationObjectToRemove: OrganizerNotification) {
    this.notifServiceList.setNotificationToDelete(notificationObjectToRemove);
  }
}
