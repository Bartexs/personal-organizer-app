import { Component, Input, OnInit } from '@angular/core';
import { OrganizerNotification } from '../../models/OrganizerNotification.model';
import { StatusTypes } from '../statusTypesEnum/StatusTypes.model';
import { NotificationService } from './notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() notificationObject!: OrganizerNotification;
  notificationTitle!: string;
  notificationColorsClass!: string;

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.setTimeoutToRemove();
    this.setNotificationTitle();
    this.setNotificationColorsClass();
  }

  public setTimeoutToRemove() {
    const myTimeout = setTimeout(() => {
      this.sendRemoveNotificationRequest(this.notificationObject);
    }, 5000);
  }

  public sendRemoveNotificationRequest(notificationObjectToRemove: OrganizerNotification) {
    this.notificationService.emitRemoveNotificationRequest(notificationObjectToRemove);
  }

  public setNotificationTitle() {
    this.notificationTitle = this.notificationObject.statusType;
  }

  public setNotificationColorsClass() {
    switch(this.notificationTitle) {
      case "Success": {
        this.notificationColorsClass = "rgba(38, 119, 85, 0.788)";
        break;
      }
      case "Alert": {
        this.notificationColorsClass = "rgba(190, 148, 33, 0.753)";
        break;
      }
      case "Danger": {
        this.notificationColorsClass = "rgba(207, 36, 36, 0.788)";
        break;
      }
      default: {
        this.notificationColorsClass = "rgba(29, 11, 11, 0.76)";
        break;
      }
    }
  }
}
