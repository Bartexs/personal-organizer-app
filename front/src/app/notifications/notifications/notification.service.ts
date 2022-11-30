import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private notificationMode = new Subject<string>();

  constructor() { 
  }

  public getNotificationMode(): Observable<string> {
    return this.notificationMode.asObservable();
  }

  setNotificationMode(mode: string) {
    this.notificationMode.next(mode);
  }
}
