import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksListService {
  private dateSource = new Subject<String>();
  currentDateValue: string;

  constructor() { 
    this.currentDateValue = this.setTodayDate();
  }

  public setTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
  }

  public refreshBothLists() {
    
  }

  public setCurrentDateValue(value: string) {
    this.currentDateValue = value;
  }

  public getCurrentDateValue() {
    return this.currentDateValue;
  }

  public getMessage(): Observable<String> {
    return this.dateSource.asObservable();
  }

  public setMessage(value: String) {
    this.dateSource.next(value);
  }
}
