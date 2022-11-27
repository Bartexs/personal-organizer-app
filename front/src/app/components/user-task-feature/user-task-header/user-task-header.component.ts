import { Component, OnInit } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-task-header',
  templateUrl: './user-task-header.component.html',
  styleUrls: ['./user-task-header.component.css']
})
export class UserTaskHeaderComponent implements OnInit {
  dateToShow!: any;

  constructor(public userTasksListService: UserTasksListService) { 
  }

  ngOnInit(): void {
    this.subscribeUserTasksListService();
  }

  public subscribeUserTasksListService() {
    console.log()
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.dateToShow = msg;
    });
  }

  // based on amount of days got as parameter it shows another day 
  public setDate(numberOfDays: number) {
    var currDay = new Date(this.dateToShow);
    currDay.setDate(currDay.getDate() + numberOfDays);
    this.dateToShow = currDay.toISOString().split('T')[0];
    this.userTasksListService.setMessage(this.dateToShow);
    // this.fetchTasksForDate();
  }
}
