import { Component, OnInit } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';

@Component({
  selector: 'app-user-task-header',
  templateUrl: './user-task-header.component.html',
  styleUrls: ['./user-task-header.component.css']
})
export class UserTaskHeaderComponent implements OnInit {
  dateToShow!: any;
  showAllTasks!: boolean;
  messageToShow!: String;

  constructor(public userTasksListService: UserTasksListService) { 
  }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDateToShow();
    this.subscribeToMessageToShow();
  }

  public subscribeToMessageToShow() {
    return this.userTasksListService.getMessageToShow().subscribe((msg) => {
      msg == "all" ? this.showAllTasks = true : this.showAllTasks = false;
      this.messageToShow = this.dateToShow;
    });
  }

  public subscribeUserTasksListServiceDateToShow() {
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.dateToShow = msg;
    });
  }

  public setObservableMessageToShow(mode: string) {
    this.userTasksListService.setMessageToShow(mode);
  }

  // based on amount of days got as parameter it shows another day 
  public setDate(numberOfDays: number) {
    this.addDaysToCurrentlyShowingDate(numberOfDays);
    this.userTasksListService.setMessage(this.dateToShow);
    this.setObservableMessageToShow("date");
    this.userTasksListService.fetchTasksEmit();
    this.userTasksListService.setShowAllSchedulesUserTasksObservable(false);
  }

  public addDaysToCurrentlyShowingDate(numberOfDays: number) {
    var currDay = new Date(this.dateToShow);
    currDay.setDate(currDay.getDate() + numberOfDays);
    this.dateToShow = currDay.toISOString().split('T')[0];
  }

  // sets date to show as today and fetch tasks
  public setDateToShowAsTodayAndFetchTasks() {
    this.userTasksListService.setMessage(this.userTasksListService.todayDate);
    this.setObservableMessageToShow("date");
    this.userTasksListService.setShowAllSchedulesUserTasksObservable(false);
    this.userTasksListService.fetchTasksEmit();
  }

  public onFetchAllScheduledTasks() {
    this.setObservableMessageToShow("all");
    this.userTasksListService.setMessage(this.userTasksListService.getTodayDate());
    this.userTasksListService.setShowAllSchedulesUserTasksObservable(true);
  }
}
