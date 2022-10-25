import { Component, OnInit } from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { Task } from 'src/app/models/task.model'

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  tasks: Task[] = [];
  currentDate: any; 
  dateToShow: any;
  daysCounter = 0;
  isTasksListForDayEmpty = false;
  createNewTaskModal = false;
  // set view mode, if showing on dashboard show compactView, if showing on tasks-list page show fullView
  viewMode = "compactView, fullView";

  constructor(private taskService: TasksListService) { }

  ngOnInit(): void {
    this.setDate();
    this.taskService.onFetchDate(this.daysCounter).subscribe((date) => {
      this.dateToShow = date;
    });

    this.taskService.onFetchTasks(this.daysCounter).subscribe((tasksRecieved) => {
      this.tasks = tasksRecieved;
    });

    this.onInitPopulateSingleTasksList();
  }

  checkTasksListForDayEmpty() {
    if(this.tasks.length == 0) {
      this.isTasksListForDayEmpty = true;
    } else {
      this.isTasksListForDayEmpty = false;
    }
  }

  onInitPopulateSingleTasksList() {
    this.taskService.onInitPopulateSingleTasksList().subscribe((message) => {
      console.log(message);
    })
  }

  showDay(dayCounter: number) {
    this.daysCounter += dayCounter;
    this.taskService.onFetchDate(this.daysCounter).subscribe((date) => {
      this.dateToShow = date;
    });

    this.taskService.onFetchTasks(this.daysCounter).subscribe((tasksRecieved) => {
      this.tasks = tasksRecieved;
      this.checkTasksListForDayEmpty();
    });
  }

  setDate() {
    let today = new Date();
    
    let daysOfWeek: string[] = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];

    this.currentDate = {name: daysOfWeek[today.getDay() - 1], dayOfMonth: today.getDate(), month: today.getMonth() + 1};
  }
}
