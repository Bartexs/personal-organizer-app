import { Component, OnInit } from '@angular/core';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-tasks-date-scheduled-list',
  templateUrl: './user-tasks-date-scheduled-list.component.html',
  styleUrls: ['./user-tasks-date-scheduled-list.component.css']
})
export class UserTasksDateScheduledListComponent implements OnInit {
  scheduledUserTasksList: UserTask[] = [];
  isListEmpty!: boolean;
  dateToShow!: string;
  showSuccessfullyDeletedNotification = false;
  deletedUserTaskMessageForNotification!: {messageContent: string, objectType: string};

  constructor(private userTaskService: UserTaskService, private userTasksListService: UserTasksListService) { }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDate();
    this.fetchUserTasksScheduledByDate();
    this.subscribeToFetchUserTasks();
  }

  
  public subscribeUserTasksListServiceDate() {
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.dateToShow = msg;
    });
  }

  public subscribeToFetchUserTasks() {
    this.userTasksListService.onFetchUserTasksList.subscribe(() => {
      this.fetchUserTasksScheduledByDate();
    });
  }

  public fetchUserTasksScheduledByDate() {
    this.userTaskService.onFetchScheduledTasksByDate(this.dateToShow).subscribe((userTasksCompletedReceived) => {
      this.scheduledUserTasksList = userTasksCompletedReceived;
      this.setIsListEmpty();
    })
  }


  public setIsListEmpty() {
    this.isListEmpty = this.scheduledUserTasksList.length == 0;
  }

  // fires success notification with give message and object type, and refresh lists 
  public onTaskDeleted(deletedTask: UserTask) {
    this.deletedUserTaskMessageForNotification = {
      messageContent: deletedTask.name, 
      objectType: "userTask"
    }
    this.showSuccessfullyDeletedNotification = true;

    const myTimeout = setTimeout(() => {
      this.showSuccessfullyDeletedNotification = false;
    }, 5000);
  }

}
