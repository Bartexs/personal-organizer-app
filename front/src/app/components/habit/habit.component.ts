import { Component, OnInit, Input } from '@angular/core';
import { Habit } from 'src/app/models/habit.model';
import { TasksListService } from 'src/app/services/tasks-list.service';

@Component({
  selector: 'app-habit',
  templateUrl: './habit.component.html',
  styleUrls: ['./habit.component.css']
})
export class HabitComponent implements OnInit {
  @Input() habitToShow!: Habit;
  nextFiveDaysView: {day: string, habitTrained: boolean}[] = [];

  constructor(private restService: TasksListService) { }

  ngOnInit(): void {
    this.getHabitFormView();
  }

  // sending request to the tasks service to get -day- object
  // in method parameters we set amount of days we want to get
  public getHabitFormView() {
    this.restService.onFetchHabitFormDays(this.habitToShow.id, 5).subscribe((formRecieved) => {
      this.nextFiveDaysView = formRecieved;
    });
  }

  public setHabitTrained(habitDayToChangeIsTrained: {day: string, habitTrained: boolean}) {
    habitDayToChangeIsTrained.habitTrained == true ? habitDayToChangeIsTrained.habitTrained = false : habitDayToChangeIsTrained.habitTrained = true;

    this.restService.onPostHabitTrained(this.habitToShow.id, habitDayToChangeIsTrained);
  }
}
