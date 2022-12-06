import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

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
    this.authService.signup().subscribe((respond) => {
      console.log(respond);
    })
  }
}
