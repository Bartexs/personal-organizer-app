import { Component, OnInit } from '@angular/core';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { AppearanceService } from '../../settings/appearance.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-user-task-header',
  templateUrl: './user-task-header.component.html',
  styleUrls: ['./user-task-header.component.css']
})
export class UserTaskHeaderComponent implements OnInit {
  dateToShow!: any;
  showAllTasks!: boolean;
  messageToShow!: String;
  color!: string;

  constructor(public userTasksListService: UserTasksListService, private appearenceService: AppearanceService, private ref: ChangeDetectorRef) { 
  }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDateToShow();
    this.subscribeToMessageToShow();
    this.subscribeToGettingColorSchema();
    this.appearenceService.setColorSchemaObservable(ColorSchema.DARK);
  }

  private setDateToShow(newDateToShow: any) {
    this.dateToShow = newDateToShow;
  }

  private subscribeToGettingColorSchema() {
    this.appearenceService.getColorSchemaObservable().subscribe((color) => {
      this.color = color.mainColor;
    })
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
    const newDateToShow = this.addDaysToGivenDate(numberOfDays, this.dateToShow);
    this.setDateToShow(newDateToShow);
    this.userTasksListService.setMessage(this.dateToShow);
    this.setObservableMessageToShow("date");
    this.userTasksListService.fetchTasksEmit();
    this.userTasksListService.setShowAllSchedulesUserTasksObservable(false);
  }

  public setDateByPickDayButton(event: any) {
    console.log(event.value);
    const valueFromDatePicker = event.value;
    this.setDateToShow(valueFromDatePicker);
    this.userTasksListService.setMessage(this.dateToShow);
    this.setObservableMessageToShow("date");
    this.userTasksListService.fetchTasksEmit();
    this.userTasksListService.setShowAllSchedulesUserTasksObservable(false);
  }

  private addDaysToGivenDate(numberOfDays: number, date: any) {
    var currDay = new Date(date);
    currDay.setDate(currDay.getDate() + numberOfDays);
    return currDay.toISOString().split('T')[0];
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
