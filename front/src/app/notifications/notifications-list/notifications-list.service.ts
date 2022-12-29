import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { OrganizerNotification } from 'src/app/models/OrganizerNotification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsListService {
  private notification = new Subject<OrganizerNotification>();
  private notificationToDelete = new Subject<OrganizerNotification>();

  constructor() { 
  }

  public getNotification(): Observable<OrganizerNotification> {
    return this.notification.asObservable();
  }

  public setNotification(notification: OrganizerNotification) {
    this.notification.next(notification);
  }

  public getNotificationToDelete(): Observable<OrganizerNotification> {
    return this.notificationToDelete.asObservable();
  }

  public setNotificationToDelete(notification: OrganizerNotification) {
    this.notificationToDelete.next(notification);
  }
}
