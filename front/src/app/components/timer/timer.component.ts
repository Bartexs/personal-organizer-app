import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.css']
})
export class TimerComponent implements OnInit {
  seconds: number = 0;
  intervalId: any;
  countingTime: boolean = true;
  @Output() emitTimeElapsed = new EventEmitter<number>();

  constructor() { 
  }

  ngOnInit(): void {
    this.timeElapsed();
  }

  stopTimer(secondsElapsed: number) {
    this.emitTimeElapsed.emit(secondsElapsed);
    clearInterval(this.intervalId);
  }

  updateTimer() {
    this.seconds = this.seconds + 1;
    console.log(this.seconds);  
  }

  timeElapsed() {
    this.intervalId = setInterval(()=>{
      this.countingTime = true;
      this.updateTimer();
    }, 1000);
  }

  pauseTimer() {
    this.countingTime = false;
    clearInterval(this.intervalId);
  }
}
