import { Component, OnInit } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-task-controller',
  templateUrl: './user-task-controller.component.html',
  styleUrls: ['./user-task-controller.component.css']
})

// component takes care of:
// SHOWING WIDGET / FULL VIEW
// SHOWING HEADER WITH BUTTONS & SHOWING CREATION ROW
// SHOWING TASKS LISTS / ALL SCHEDULED TASKS

export class UserTaskControllerComponent implements OnInit {
  isWidgetView = true;
  showAllScheduledTasksList = false;

  constructor(private userTasksListService: UserTasksListService ) { 

  }

  ngOnInit(): void {
    this.userTasksListService.getShowAllSchedulesUserTasksObservable().subscribe((value) => {
      this.showAllScheduledTasksList = value;
    })
  }
}
