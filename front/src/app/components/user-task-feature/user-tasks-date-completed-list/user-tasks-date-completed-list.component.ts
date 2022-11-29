import { Component, OnInit } from '@angular/core';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-tasks-date-completed-list',
  templateUrl: './user-tasks-date-completed-list.component.html',
  styleUrls: ['./user-tasks-date-completed-list.component.css']
})
export class UserTasksDateCompletedListComponent implements OnInit {
  completedTasksList: UserTask[] = [];
  isListEmpty!: boolean;
  dateToShow!: string;
  showSuccessfullyDeletedNotification = false;
  deletedUserTaskMessageForNotification!: {messageContent: string, objectType: string};

  constructor(private userTaskService: UserTaskService, private userTasksListService: UserTasksListService) { }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDate();
    this.fetchUserTasksCompletedByDate();
    this.subscribeToFetchUserTasks();
  }

  public subscribeUserTasksListServiceDate() {
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.dateToShow = msg;
    });
  }

  public subscribeToFetchUserTasks() {
    this.userTasksListService.onFetchUserTasksList.subscribe(() => {
      this.fetchUserTasksCompletedByDate();
    });
  }

  public fetchUserTasksCompletedByDate() {
    this.userTaskService.onFetchCompletedTasksByDate(this.dateToShow).subscribe((userTasksCompletedReceived) => {
      this.completedTasksList = userTasksCompletedReceived;
      this.setIsListEmpty();
    })
  }


  public setIsListEmpty() {
    this.isListEmpty = this.completedTasksList.length == 0;
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
