import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow!: UserTask;
  @Output() deletedMyself = new EventEmitter<void>();
  @Output() updatedTask = new EventEmitter<void>();
  timeElapsedFromStopWatch = 0;
  modifyUserTaskModal = false;

  showTimer = false;
  editMode = false;

  showDeleteConfirmModal = false;

  constructor(private userTaskService: UserTaskService) { }

  ngOnInit(): void {
  }

  // when called tells user task list component to refresh lists - task has been updated
  public emitUpdatedTaskPing() {
    this.updatedTask.emit();
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

  // sets usertask as completed, update it to database and ping list to refresh itself
  public setCompleted(value: boolean) {
    this.taskToShow.completed = value;
    this.userTaskService.onUpdateUserTask(this.taskToShow).subscribe((responseData) => {
      this.emitUpdatedTaskPing();
    });
  }

  // move task to next day
  public scheduleForNextDay() {
    let newDateFoUserTask: Date;
    newDateFoUserTask = new Date(this.taskToShow.dateTaskToBeDone);
  
    function addDays(date: any, days: number) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    newDateFoUserTask = addDays(newDateFoUserTask, 1);
    const stringDate = newDateFoUserTask.toISOString().split('T')[0]

    this.taskToShow.dateTaskToBeDone = stringDate;
 
    this.userTaskService.onUpdateUserTask(this.taskToShow).subscribe((responseData) => {
      this.emitUpdatedTaskPing();
    });
  }

  // delete userTask from database and ping list to refresh itself
  public deleteUserTask() {
    this.userTaskService.deleteUserTask(this.taskToShow.id).subscribe((responseData) => {
      this.emitUpdatedTaskPing();
    });
    this.setShowDeleteConfirmModal(false);
    this.deletedMyself.emit();
  }

  // change variable to true when we should show modal with confirmation to delete
  public setShowDeleteConfirmModal(value: boolean) {
    this.showDeleteConfirmModal = value;
  }

  public setShowModifyModal(value: boolean) {
    this.modifyUserTaskModal = value;
  }

  public saveUserTaskColor(picker: any) {
    this.taskToShow.color = picker.value;
    this.userTaskService.onUpdateUserTask(this.taskToShow).subscribe((responseData) => {
      this.emitUpdatedTaskPing();
    });
  }
}


// SHOW ORANGE SHADOW UNDER TASKS THAT WAS SCHEDULED EARLIER THAN CURRENTLY SHOWING DAY,
// SHOW RED SHADOW UNDER TASKS THAT ARE IMPORTANT
