import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() taskToShow!: UserTask;
  @Input() currDate!: any;
  @Output() deletedMyself = new EventEmitter<void>();
  @Output() updatedTask = new EventEmitter<void>();
  modifyUserTaskModal = false;
  showDeleteConfirmModal = false;

  constructor(private userTaskService: UserTaskService) { }

  ngOnInit(): void {
  }

  // when called tells user task list component to refresh lists - task has been updated
  public emitUpdatedTaskPing() {
    this.updatedTask.emit();
  }

  // sets usertask as completed, update it to database and ping list to refresh itself
  public setCompleted(value: boolean) {
    this.taskToShow.completed = value;
    var today = new Date();
    this.taskToShow.completionDate = this.currDate;
    this.userTaskService.onUpdateUserTask(this.taskToShow).subscribe((responseData) => {
      this.emitUpdatedTaskPing();
    });
  }

  // move task to next day
  public scheduleForNextDay() {
    let newDateFoUserTask: Date;
    newDateFoUserTask = new Date(this.taskToShow.scheduleDate);
  
    function addDays(date: any, days: number) {
      var result = new Date(date);
      result.setDate(result.getDate() + days);
      return result;
    }
    newDateFoUserTask = addDays(newDateFoUserTask, 1);
    const stringDate = newDateFoUserTask.toISOString().split('T')[0]

    this.taskToShow.scheduleDate = stringDate;
 
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