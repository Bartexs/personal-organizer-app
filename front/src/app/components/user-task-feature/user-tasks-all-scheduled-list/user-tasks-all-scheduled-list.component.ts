import { Component, OnInit } from '@angular/core';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-tasks-all-scheduled-list',
  templateUrl: './user-tasks-all-scheduled-list.component.html',
  styleUrls: ['./user-tasks-all-scheduled-list.component.css']
})
export class UserTasksAllScheduledListComponent implements OnInit {
  scheduledTasksList: UserTask[] = [];
  isScheduledTasksListEmpty!: boolean;
  showSuccessfullyDeletedNotification = false;
  deletedUserTaskMessageForNotification!: {messageContent: string, objectType: string};

  constructor(private userTaskService: UserTaskService, private userTasksListService: UserTasksListService) { }

  ngOnInit(): void {
    this.fetchAllScheduledUserTasks();
    this.subscribeToFetchUserTasks();
  }

  public subscribeToFetchUserTasks() {
    this.userTasksListService.onFetchUserTasksList.subscribe(() => {
      this.fetchAllScheduledUserTasks();
    });
  }

  fetchAllScheduledUserTasks() {
    this.userTaskService.onFetchAllScheduledTasks().subscribe((responseList) => {
      this.scheduledTasksList = responseList;
      this.setIsScheduledTasksListEmpty();
    });
  }

  public setIsScheduledTasksListEmpty() {
    this.isScheduledTasksListEmpty = this.scheduledTasksList.length == 0;
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
