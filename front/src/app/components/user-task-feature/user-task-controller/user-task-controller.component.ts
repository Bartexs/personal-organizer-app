import { Component, OnInit } from '@angular/core';
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

  constructor(private userTasksListService: UserTasksListService ) { }

  ngOnInit(): void {
    this.setTodayDate();
    console.log(this.todayDate);
    this.userTasksListService.setMessage(this.todayDate);
    console.log(this.userTasksListService.getMessage());
  }

  public setTodayDate() {
    var today = new Date();
    this.todayDate = today.toISOString().split('T')[0];
    this.userTasksListService.setCurrentlyShowingDate(today);
  }

}
