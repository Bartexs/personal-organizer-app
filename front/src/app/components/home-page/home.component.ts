import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.sendSessionData();
  }

  startTimer = false;
  secondsElapsed = 0;

  onTimerStarted() {
    this.startTimer = true;
  }

  saveSeconds(newTime: number) {
    this.startTimer = false;
    this.secondsElapsed = newTime;
    console.log("Last time logged");
    console.log(newTime);
  }

  public sendSessionData() {
    this.sessionService.sendSessionData().subscribe((response) => {
      console.log(response);
    }); 
  }


}
