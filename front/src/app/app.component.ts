import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personal-organizer-app';
  startTimer = false;
  secondsElapsed = 0;
  isUserLoggedIn = true;

  onTimerStarted() {
    this.startTimer = true;
  }

  saveSeconds(newTime: number) {
    this.startTimer = false;
    this.secondsElapsed = newTime;
    console.log("Last time logged");
    console.log(newTime);
  }
}
