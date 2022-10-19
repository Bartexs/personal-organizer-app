import { Component, OnInit, Input, Output} from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { Task } from 'src/app/models/task.model'

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow!: Task;
  timeElapsedFromStopWatch = 0;

  showTimer = false;
  editMode = false;


  constructor(private taskService: TasksListService) { }

  ngOnInit(): void {
    console.log(this.taskToShow);
    console.log(this.taskToShow.subTaskMap);
  }

  toogleEditMode() {
    this.editMode == true ? this.editMode = false : this.editMode = true;
  }

  setShowTimer() {
    this.showTimer = true;
  }

  saveTimeElapsedFromStopwatch(timeRecievedFromStopwatch: number) {
    this.timeElapsedFromStopWatch = timeRecievedFromStopwatch;
    this.showTimer = false;
    this.updateTimeSpentOnTaskToDatabase()
    console.log("Tasks's time elapsed from stopwatch: " + this.timeElapsedFromStopWatch);
  }

  updateTimeSpentOnTaskToDatabase() {
    let newUpdate = {
      taskId: this.taskToShow.id,
      time: this.timeElapsedFromStopWatch
    }
    this.taskService.onModifyTimeSpentOnTask(newUpdate);
  }

  public updateMarkAsCompleted() {
    this.taskToShow.markedAsCompleted == true ? this.taskToShow.markedAsCompleted = false : this.taskToShow.markedAsCompleted = true;
    
  }
}
