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
  dateToShow: any;
  daysCounter = 0;
  isTasksListForDayEmpty = false;
  createNewTaskModal = false;
  id!: number;

  // decides if tasks list widget is hidden or not
  isShowView = true;

  constructor(private taskService: TasksListService) { }

  ngOnInit(): void {
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

  setDateToShowToToday() {
    this.daysCounter = 0;
    this.showDay(0);
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

  setDateAsAllTasks() {
    this.dateToShow = "All tasks";
  }

  createNewTaskShort(event: any) {
    this.setId();
    
    const createTask: Task = {
      id: this.id,
      name: event.value,
      markedAsCompleted: false,
      dateDue: this.dateToShow,
      countTimePerDay: false,
      hasSubTasks: false
    }

    this.taskService.onPostNewTask(createTask);

    this.ngOnInit();
  }

  private setId() {
    this.taskService.generateIdForNewTask().subscribe((generatedId) => {
      this.id = generatedId;
    })
  }
}
