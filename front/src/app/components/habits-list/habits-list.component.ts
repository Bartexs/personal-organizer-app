import { Component, Input, OnInit } from '@angular/core';
import { Habit } from 'src/app/models/habit.model';
import { TasksListService } from 'src/app/services/tasks-list.service';

@Component({
  selector: 'app-habits-list',
  templateUrl: './habits-list.component.html',
  styleUrls: ['./habits-list.component.css']
})
export class HabitsListComponent implements OnInit {
  habitsList: Habit[] = [];
  collapseHabits = false;
  showHabits = true;
  createNewHabit = false;

  constructor(private taskService: TasksListService) { }

  ngOnInit(): void {
    this.onFetchHabits();
  }

  setCollapseHabits() {
    this.collapseHabits == true ? this.collapseHabits = false : this.collapseHabits = true;
    this.showHabits == true ? this.showHabits = false : this.showHabits = true;
  }

  setCreateNewHabit() {
    this.createNewHabit == true ? this.createNewHabit = false : this.createNewHabit = true;
    console.log(this.createNewHabit);
  }

  onFetchHabits() {
    this.taskService.onFetchHabits().subscribe((habitsRecieved) => {
      this.habitsList = habitsRecieved;
    });
  }

  onCreateNewHabit() {

    const habitToCreate = {
      id: Date.now(),
      name: "AASDASDas",
      countTimePerDay: false, 
      hasSubTasks: false,
      monthHabitTrainedList: [], 
      latestMonthCreated: 0
    };

    this.taskService.onCreateNewHabit(habitToCreate)
  }
}
