import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-task-header',
  templateUrl: './user-task-header.component.html',
  styleUrls: ['./user-task-header.component.css']
})
export class UserTaskHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  // based on amount of days got as parameter it shows another day 
  // public setDate(numberOfDays: number) {
  //   var currDay = new Date(this.dateToShow);
  //   currDay.setDate(currDay.getDate() + numberOfDays);
  //   this.dateToShow = currDay.toISOString().split('T')[0];
  //   this.fetchTasksForDate();
  // }
}
