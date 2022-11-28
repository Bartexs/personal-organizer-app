import { EventEmitter, Injectable, Output } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksListService {
  private dateSource = new ReplaySubject<String>();
  onFetchUserTasksList = new EventEmitter<any>();
  todayDate: string;

  constructor() { 
    this.setMessage(this.setTodayDate());
    this.todayDate = this.setTodayDate();
  }

  public setTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
  }

  public fetchTasksEmit() {
    console.log("Emit ping to fetch tasks");
    this.onFetchUserTasksList.emit();
  }

  public getMessage(): Observable<String> {
    console.log(this.dateSource);
    return this.dateSource.asObservable();
  }

  public setMessage(value: String) {
    this.dateSource.next(value);
  }
}
