import { Injectable } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksListService {
  private dateSource = new ReplaySubject<String>();

  constructor() { 
    this.setMessage(this.setTodayDate());
  }

  public setTodayDate() {
    var today = new Date();
    return today.toISOString().split('T')[0];
  }

  public refreshBothLists() {
    
  }

  public getMessage(): Observable<String> {
    console.log(this.dateSource);
    return this.dateSource.asObservable();
  }

  public setMessage(value: String) {
    this.dateSource.next(value);
  }
}
