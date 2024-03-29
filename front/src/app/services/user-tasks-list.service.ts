import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksListService {
  private dateSource = new ReplaySubject<string>();

  private showAllScheduledTasksList = new ReplaySubject<boolean>();
  private messageToShow = new ReplaySubject<string>();
  onFetchAllScheduledUserTasks = new EventEmitter<string>();

  onFetchUserTasksList = new EventEmitter<any>();
  todayDate: string;

  constructor() { 
    this.setMessage(this.setTodayDate());
    this.todayDate = this.setTodayDate();
    this.setMessageToShow("date");
    this.setShowAllSchedulesUserTasksObservable(false);
  }

  public getMessageToShow(): Observable<String> {
    return this.messageToShow.asObservable();
  }

  public setMessageToShow(value: string) {
    this.messageToShow.next(value);
  }

  public setTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
  }

  public getTodayDate() {
    return this.todayDate;
  }

  public fetchTasksEmit() {
    this.onFetchUserTasksList.emit();
  }

  public getShowAllSchedulesUserTasksObservable(): Observable<boolean> {
    return this.showAllScheduledTasksList.asObservable();
  }

  public setShowAllSchedulesUserTasksObservable(value: boolean) {
    this.showAllScheduledTasksList.next(value);
  }

  public getMessage(): Observable<string> {
    return this.dateSource.asObservable();
  }

  public setMessage(value: string) {
    this.dateSource.next(value);
  }
}
