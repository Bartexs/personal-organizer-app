import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { StatisticsSummary } from './StatisticsSummary';

@Component({
  selector: 'app-statistics-main',
  templateUrl: './statistics-main.component.html',
  styleUrls: ['./statistics-main.component.css']
})
export class StatisticsMainComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  public getStatisticsSummary() {
    this.onGetStatisticsSummary().subscribe((rec) => {
      console.log(rec);
    })
  }

  private onGetStatisticsSummary() {
    let pathToGet = 'http://localhost:8080/statistics/summary'
    return this.http.get<StatisticsSummary>(pathToGet);
  }
}
