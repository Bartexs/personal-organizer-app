import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserTasksListService {
  todayDate!: any;
  currentlyShowingDate!: any;
  private dateSource = new Subject<String>();

  constructor() { }

  public refreshBothLists() {
    
  }

  public setCurrentlyShowingDate(value: any) {
    this.currentlyShowingDate = value;
  }

  public getCurrentlyShowingDate() {
    return this.currentlyShowingDate;
  }

  public getMessage(): Observable<String> {
    return this.dateSource.asObservable();
  }

  public setMessage(date: String) {
    return this.dateSource.next(date);
  }
}
