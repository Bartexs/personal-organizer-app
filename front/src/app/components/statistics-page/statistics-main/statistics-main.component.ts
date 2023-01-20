import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticsSummary } from './StatisticsSummary';

export interface TimeForUI {
  hours: number, 
  minutes: number
}

@Component({
  selector: 'app-statistics-main',
  templateUrl: './statistics-main.component.html',
  styleUrls: ['./statistics-main.component.css']
})

export class StatisticsMainComponent implements OnInit {
  statisticsSummary!: StatisticsSummary;
  timeSpentOnOrganizer!: TimeForUI;
  longestSession!: TimeForUI;
  isLoading = true; 

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getStatisticsSummary();
  }

  public convertMinutesTimersForUI(minutesToConvert: number): {hours: number, minutes: number} {
    let hours = Math.round(minutesToConvert / 60);
    let minutes = minutesToConvert % 60;

    return {hours, minutes};
  }

  // move it all to the statistics service
  public async getStatisticsSummary() {
    this.isLoading = true;
    this.onGetStatisticsSummary().subscribe((rec) => {
      this.statisticsSummary = rec;
      this.longestSession = this.convertMinutesTimersForUI(this.statisticsSummary.longestSessionsDuration);
      this.timeSpentOnOrganizer = this.convertMinutesTimersForUI(this.statisticsSummary.timeSpentOnOrganizer);
      this.isLoading = false;
    })
  }

  private onGetStatisticsSummary() {
    let pathToGet = 'http://localhost:8080/statistics/summary'
    return this.http.get<StatisticsSummary>(pathToGet);
  }
}
