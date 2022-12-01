import { Component, Input, OnInit } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { NotificationsListService } from 'src/app/notifications/notifications-list/notifications-list.service';
import { Notification } from 'src/app/notifications/notification-model/Notification.model';

@Component({
  selector: 'app-create-new-task-simplified',
  templateUrl: './create-new-task-simplified.component.html',
  styleUrls: ['./create-new-task-simplified.component.css']
})
export class CreateNewTaskSimplifiedComponent implements OnInit {
  isUserTaskNameInputInvalid = false;
  createNewTaskModal = false;
  defaultDateForTaskCreation!: any;

  constructor(private userTasksListService: UserTasksListService, private userTaskService: UserTaskService, private notificationListService: NotificationsListService) { }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDate();
  }

  public subscribeUserTasksListServiceDate() {
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.defaultDateForTaskCreation = msg;
    });
  }

  // creating new user via usertask service and processing response we got from it, to not forget status 201 means CREATED, refresh lists at the end of the method
  public createNewUserTask(value: any) {
    
    const createNewUserTask: UserTask = {
      name: value.value,
      completed: false,
      // it sets date as currently showing
      scheduleDate: this.defaultDateForTaskCreation,
      importantTask: false
    }

    this.userTaskService.onPostNewTask(createNewUserTask).subscribe((responseData) => {
      // we fire propert method based on status from API 
      responseData.status == 201 ? this.showUserTaskCreatedResponse(createNewUserTask.name) : this.showUserTaskNotCreatedResponse("Something went wrong");
      this.userTasksListService.fetchTasksEmit();
    });
    console.log(createNewUserTask);
    value.value = "";
  }

  isUserTaskNameValid(userTaskName: any) {
    return userTaskName.value.length > 0;
  }

  validateUserTaskNameAndCreateNewUserTask(value: any) {
    if(this.isUserTaskNameValid(value)) {
      this.createNewUserTask(value)
    } else {
      this.showUserTaskNotCreatedResponse("Task name can not be empty!");
      this.isUserTaskNameInputInvalid = true;

      const myTimeout = setTimeout(() => {
        this.isUserTaskNameInputInvalid = false;
      }, 2000);
    }
  }

  // shows when something went wrong 
  public showUserTaskNotCreatedResponse(message: string) {
    console.log(message);
  }

  // shows when task has been added to database
  public showUserTaskCreatedResponse(userTaskName: string) {
    const notif: Notification = {
      title: "Created",
      message: "Created new user task",
      typeOfObject: "UserTask"
    }

    this.notificationListService.setNotification(notif);
  }
}
