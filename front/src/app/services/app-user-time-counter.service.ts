import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppUserTimeCounterService {
  counter = 0;
  timerInterval: any;
  toBackendSendInterval: any;

  constructor(private http: HttpClient) { 

  }

  public countCurrentSessionTime() {
    this.resetCounter();
    this.startTimer();
    this.startPostToBackendInterval();
  }

  private startPostToBackendInterval() {
    this.toBackendSendInterval = setInterval(() => {
      this.onPostCurrentSessionTimer(this.counter).subscribe();
    }, 60 * 1000)
  }

  private startTimer() {
    this.timerInterval = setInterval(() => {
      this.counter = this.counter + 1;
    }, 60 * 1000)
  }

  public stopCountCurrentSessionTime() {
    this.stopTimer();
    clearInterval(this.toBackendSendInterval);
    this.resetCounter();
  }

  private onPostCurrentSessionTimer(time: number) {
    let pathToPost = 'http://localhost:8080/statistics/timer'
    return this.http.post(pathToPost, time);
  }

  private stopTimer() {
    clearInterval(this.timerInterval);
  }

  private resetCounter() {
    this.counter = 0;
  }
}
