import { Component, OnInit } from '@angular/core';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { UserTaskService } from 'src/app/services/user-task.service';
import { UserTask } from 'src/app/models/UserTask.model';

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {
  completedTasks: UserTask[] = [];
  notCompletedTasks: UserTask[] = [];
  dateToShow: any;
  daysCounter = 0;
  isTasksListForDayEmpty = false;
  createNewTaskModal = false;
  id!: number;

  // decides if tasks list widget is hidden or not
  isShowView = true;

  newTaskName!: string;

  constructor(private taskService: TasksListService, private userTaskService: UserTaskService) { }

  ngOnInit(): void {
    this.setDateToShowAsTodayAndFetchTasks();
  }

  // sets date to show as today and fetch tasks
  public setDateToShowAsTodayAndFetchTasks() {
    var today = new Date();
    this.dateToShow = today.toISOString().split('T')[0];
    this.fetchTasksForDate();
  }

  // based on amount of days got as parameter it shows another day 
  public setDate(numberOfDays: number) {
    var currDay = new Date(this.dateToShow);
    currDay.setDate(currDay.getDate() + numberOfDays);
    this.dateToShow = currDay.toISOString().split('T')[0];
    this.fetchTasksForDate();
  }

  // wrapper method
  public fetchTasksForDate() {
    this.userTaskService.onFetchCompletedTasksByDate(this.dateToShow).subscribe((userTasksCompletedReceived) => {
      this.completedTasks = userTasksCompletedReceived;
    })

    // fetch NOT completed tasks using date 
    this.userTaskService.onFetchNotCompletedTasksByDate(this.dateToShow).subscribe((userTasksNotCompletedReceived) => {
      this.notCompletedTasks = userTasksNotCompletedReceived;
    })
  }

  // shows when task has been added to database
  public showUserTaskCreatedResponse(userTaskName: string) {
    console.log("created task named:");
    console.log(userTaskName);
  }

  // shows when something went wrong 
  public showUserTaskNotCreatedResponse() {
    console.log("NOT created");
  }

  // creating new user via usertask service and processing response we got from it, to not forget status 201 means CREATED 
  public createNewUserTask(newUserTaskName: string) {
    const createNewUserTask: UserTask = {
      name: newUserTaskName,
      completed: false,
      // it sets date as currently showing
      dateTaskToBeDone: this.dateToShow,
    }

    this.userTaskService.onPostNewTask(createNewUserTask).subscribe((responseData) => {
      // we fire propert method based on status from API 
      responseData.status == 201 ? this.showUserTaskCreatedResponse(createNewUserTask.name) : this.showUserTaskNotCreatedResponse();
    });
  }
  setDateAsAllTasks() {
    this.dateToShow = "All tasks";
  }
}
