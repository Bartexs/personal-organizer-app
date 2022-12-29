import { Injectable } from '@angular/core';
import { OrganizerNotification } from 'src/app/models/OrganizerNotification.model';
import { UserTask } from 'src/app/models/UserTask.model';
import { NotificationsListService } from 'src/app/notifications/notifications-list/notifications-list.service';
import { StatusTypes } from 'src/app/notifications/statusTypesEnum/StatusTypes.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CreateUserTaskService {

  constructor(private userTaskService : UserTaskService, private userTasksListService: UserTasksListService, private notificationsService: NotificationsListService) {
  }

  public onCreateUserTask(userTask: UserTask) {
    let notification = this.createOrganizerNotification(userTask);

      this.userTaskService.onPostNewTask(userTask).subscribe((responseData) => {
        if(responseData.status == 201) {
          this.userTasksListService.fetchTasksEmit();
          this.notificationsService.setNotification(notification);
        }
      })
  }

  private createOrganizerNotification(userTask: UserTask): OrganizerNotification {
    let msg = "Created task named '" + userTask.name + "'!";

    let notification: OrganizerNotification = {
      message: msg,
      statusType: StatusTypes.Success
    }

    return notification;
  }
}
