import { Injectable } from '@angular/core';
import { AppUser } from '../models/AppUser.model';
import { OrganizerNotification } from '../models/OrganizerNotification.model';
import { UserTask } from '../models/UserTask.model';
import { StatusTypes } from './statusTypesEnum/StatusTypes.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationsUtilityService {

  constructor() { }

  public createOrganizerNotification(userTask: UserTask): OrganizerNotification {
    let msg = "Created task named '" + userTask.name + "'!";

    let notification: OrganizerNotification = {
      message: msg,
      statusType: StatusTypes.Success
    }
    return notification;
  }

  public createAppUserRegisteredNotification(appUser: AppUser): OrganizerNotification {
    let msg = "Registered new user '" + appUser.name + "'!";

    let notification: OrganizerNotification = {
      message: msg,
      statusType: StatusTypes.Success
    }
    return notification;
  }

  public createAppUserNotRegistered(): OrganizerNotification {
    let msg = "Incorrect username!";

    let notification: OrganizerNotification = {
      message: msg,
      statusType: StatusTypes.Danger
    }
    return notification;
  }

  public createAppUserNotLoggedIn(): OrganizerNotification {
    let msg = "Incorrect username or password";
    
    let notification: OrganizerNotification = {
      message: msg,
      statusType: StatusTypes.Danger
    }
    return notification;
  }
}
