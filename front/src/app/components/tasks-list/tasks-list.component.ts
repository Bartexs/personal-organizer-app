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
  isScheduledTasksListEmpty!: boolean;
  isCompletedTasksListEmpty!: boolean;
  isBothListsEmpty!: boolean;
  dateToShow: any;
  daysCounter = 0;
  isTasksListForDayEmpty = false;
  createNewTaskModal = false;
  id!: number;
  showSuccessfullyDeletedNotification = false;
  deletedUserTaskMessageForNotification!: {messageContent: string, objectType: string};

  // decides if tasks list widget is hidden or not
  isShowView = true;

  newTaskName!: string;

  constructor(private taskService: TasksListService, private userTaskService: UserTaskService) { }

  ngOnInit(): void {
    this.setDateToShowAsTodayAndFetchTasks();
  }

  public setIsSheduledTasksListEmpty() {
    this.isScheduledTasksListEmpty = this.notCompletedTasks.length == 0;
  }

  public setIsCompletedTasksListyEmpty() {
    this.isCompletedTasksListEmpty = this.completedTasks.length == 0;
  }

  // sets date to show as today and fetch tasks
  public setDateToShowAsTodayAndFetchTasks() {
    var today = new Date();
    this.dateToShow = today.toISOString().split('T')[0];
    //change name of it to wrapperForFetchScheduledAndCompletedSeparately
    this.fetchTasksForDate();
    
  }

  public setIsBothListsEmpty() {
    this.userTaskService.onFetchAllUserTasksByDate(this.dateToShow).subscribe((responseData) => {
      this.isBothListsEmpty = responseData.length == 0;
    })
  }

  // based on amount of days got as parameter it shows another day 
  public setDate(numberOfDays: number) {
    var currDay = new Date(this.dateToShow);
    currDay.setDate(currDay.getDate() + numberOfDays);
    this.dateToShow = currDay.toISOString().split('T')[0];
    this.fetchTasksForDate();
  }

  // wrapper method TO REFRESH COMPLETED AND NOT COMPLETED LISTS FOR CURRENT DAY 
  public fetchTasksForDate() {
    console.log("called fetch wrapper");

    // ----------------- HOW TO IMPLEMENT CHECKING BOTH LISTS -----------------
    // we should use streams/pipes to analyze if lists contains anything or we could send a http request to easily check it on backend 


    // fetch completed tasks using date
    this.userTaskService.onFetchCompletedTasksByDate(this.dateToShow).subscribe((userTasksCompletedReceived) => {
      this.completedTasks = userTasksCompletedReceived;
      // check if lists are empty or not
    this.setIsCompletedTasksListyEmpty();
    })

    // fetch NOT completed tasks using date 
    this.userTaskService.onFetchNotCompletedTasksByDate(this.dateToShow).subscribe((userTasksNotCompletedReceived) => {
      this.notCompletedTasks = userTasksNotCompletedReceived;
      // check if lists are empty or not
    this.setIsSheduledTasksListEmpty();
    })

    this.setIsBothListsEmpty();
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

  // creating new user via usertask service and processing response we got from it, to not forget status 201 means CREATED, refresh lists at the end of the method
  public createNewUserTask(value: any) {
    
    const createNewUserTask: UserTask = {
      name: value.value,
      completed: false,
      // it sets date as currently showing
      dateTaskToBeDone: this.dateToShow,
    }

    this.userTaskService.onPostNewTask(createNewUserTask).subscribe((responseData) => {
      // we fire propert method based on status from API 
      responseData.status == 201 ? this.showUserTaskCreatedResponse(createNewUserTask.name) : this.showUserTaskNotCreatedResponse();
      this.fetchTasksForDate();
    });

    value.value = "";
  }

  showAllScheduledUserTasks() {
    this.userTaskService.onFetchAllNotCompletedTasks().subscribe((responseList) => {
      this.notCompletedTasks = responseList;
      this.completedTasks = [];
    });
  }

  // fires success notification with give message and object type, and refresh lists 
  public onTaskDeleted(deletedTask: UserTask) {
    this.deletedUserTaskMessageForNotification = {
      messageContent: deletedTask.name, 
      objectType: "userTask"
    }
    this.showSuccessfullyDeletedNotification = true;

    const myTimeout = setTimeout(() => {
      this.showSuccessfullyDeletedNotification = false;
    }, 5000);
  }

  onKeydown(value: any) {
    this.createNewUserTask(value)
  }
}
