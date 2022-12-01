import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Notification } from '../notification-model/Notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsListService {
  private notification = new Subject<Notification>();
  private notificationToDelete = new Subject<Notification>();

  constructor() { 
  }

  public getNotification(): Observable<Notification> {
    return this.notification.asObservable();
  }

  public setNotification(notif: Notification) {
    this.notification.next(notif);
  }

  public getNotificationToDelete(): Observable<Notification> {
    return this.notificationToDelete.asObservable();
  }

  public setNotificationToDelete(notif: Notification) {
    this.notificationToDelete.next(notif);
  }
}
