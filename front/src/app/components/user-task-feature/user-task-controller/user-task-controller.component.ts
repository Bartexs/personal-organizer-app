import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-task-controller',
  templateUrl: './user-task-controller.component.html',
  styleUrls: ['./user-task-controller.component.css']
})

// component takes care of:
// SHOWING WIDGET / FULL VIEW
// SHOWING HEADER WITH BUTTONS & SHOWING CREATION ROW
// SHOWING TASKS LISTS / ALL SCHEDULED TASKS / BOTH LISTS EMPTY MESSAGE

export class UserTaskControllerComponent implements OnInit {
  isWidgetView = true;
  showAllScheduledTasksList = false;
  isBothListsEmpty = false;
  currentlyShowingDay!: string;

  constructor(private userTaskService: UserTaskService, private userTasksListService: UserTasksListService ) { 

  }

  ngOnInit(): void {
    this.subscribeToGetDate();
    this.subscribeToGetShowAllScheduledUserTasks();
    this.subscribeToFetchUserTasks();
  }

  public subscribeToFetchUserTasks() {
    this.userTasksListService.onFetchUserTasksList.subscribe(() => {
      this.setIsBothListsEmpty(this.currentlyShowingDay);
    });
  }

  public subscribeToGetDate() {
    this.userTasksListService.getMessage().subscribe((date) => {
      this.currentlyShowingDay = date;
      this.setIsBothListsEmpty(date);
    })
  }
  
  public setIsBothListsEmpty(date: string) {
    this.userTaskService.getIsBothListsEmpty(date).subscribe((value) => {
      this.isBothListsEmpty = value;
    })
  }

  public subscribeToGetShowAllScheduledUserTasks() {
    this.userTasksListService.getShowAllSchedulesUserTasksObservable().subscribe((value) => {
      this.showAllScheduledTasksList = value;
    })
  }
}

