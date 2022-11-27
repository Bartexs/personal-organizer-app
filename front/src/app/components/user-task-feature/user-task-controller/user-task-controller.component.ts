import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-task-controller',
  templateUrl: './user-task-controller.component.html',
  styleUrls: ['./user-task-controller.component.css']
})
export class UserTaskControllerComponent implements OnInit {
  todayDate!: any;
  currentlyShowingDate!: any;
  isShowView = true;

  constructor(private userTasksListService: UserTasksListService ) { 
    this.todayDate = userTasksListService.getCurrentDateValue();
  }

  ngOnInit(): void {
    this.userTasksListService.setMessage(this.todayDate);
  }

  public setTodayFieldToSomethingElse() {
    console.log("called new message");
    this.userTasksListService.setMessage("new message");
  }
}
