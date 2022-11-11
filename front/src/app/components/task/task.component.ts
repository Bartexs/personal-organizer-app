import { Component, OnInit, Input, Output} from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow!: UserTask;
  timeElapsedFromStopWatch = 0;

  showTimer = false;
  editMode = false;


  constructor(private userTaskService: UserTaskService) { }

  ngOnInit(): void {
    console.log(this.taskToShow);
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
    // this.taskService.onModifyTimeSpentOnTask(newUpdate);
  }

  public updateMarkAsCompleted() {
    this.taskToShow.completed == true ? this.taskToShow.completed = false : this.taskToShow.completed = true;
    console.log(this.taskToShow.completed);
  }

  public setCompleted(value: boolean) {
    this.taskToShow.completed = value;
    this.userTaskService.onUpdateUserTask(this.taskToShow);
  }
}
