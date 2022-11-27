import { Component, OnInit } from '@angular/core';
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
  todayDate: any;
  allTasks = false;
  createNewTaskModal = false;
  id!: number;
  showSuccessfullyDeletedNotification = false;
  deletedUserTaskMessageForNotification!: {messageContent: string, objectType: string};
  newTaskName!: string;
  isShowView = true;
  scheduledUserTasksAmount!: number;
  userTaskNameEmpty = false;
  isUserTaskNameInputInvalid = false;
  
  constructor(private userTaskService: UserTaskService) { }

  ngOnInit(): void {
    this.setDateToShowAsTodayAndFetchTasks();
  }

  // wrapper method TO REFRESH COMPLETED AND NOT COMPLETED LISTS FOR CURRENT DAY 
  public fetchTasksForDate() {
    console.log("called fetch wrapper");
    this.allTasks = false;
    
    // fetch completed tasks using date
    this.userTaskService.onFetchCompletedTasksByDate(this.dateToShow).subscribe((userTasksCompletedReceived) => {
      this.completedTasks = userTasksCompletedReceived;
      // check if lists are empty or not
      this.setIsCompletedTasksListyEmpty();
    })

    // fetch SCHEDULED tasks using date 
    this.userTaskService.onFetchScheduledTasksByDate(this.dateToShow).subscribe((userTasksNotCompletedReceived) => {
      this.notCompletedTasks = userTasksNotCompletedReceived;
      // check if lists are empty or not
      this.setIsScheduledTasksListEmpty();
      this.scheduledUserTasksAmount = userTasksNotCompletedReceived.length;
    })

    this.setIsBothListsEmpty();
  }

  public setIsScheduledTasksListEmpty() {
    this.isScheduledTasksListEmpty = this.notCompletedTasks.length == 0;
  }

  public setIsCompletedTasksListyEmpty() {
    this.isCompletedTasksListEmpty = this.completedTasks.length == 0;
  }

  // sets date to show as today and fetch tasks
  public setDateToShowAsTodayAndFetchTasks() {
    this.setTodayDate();
    this.dateToShow = this.todayDate;
    this.fetchTasksForDate();
  }

  public setTodayDate() {
    var today = new Date();
    this.todayDate = today.toISOString().split('T')[0];
  }

  public setIsBothListsEmpty() {
    this.userTaskService.getIsBothListsEmpty(this.dateToShow).subscribe((responseData) => {
      this.isBothListsEmpty = responseData;
    })
  }

  // based on amount of days got as parameter it shows another day 
  public setDate(numberOfDays: number) {
    var currDay = new Date(this.dateToShow);
    currDay.setDate(currDay.getDate() + numberOfDays);
    this.dateToShow = currDay.toISOString().split('T')[0];
    this.fetchTasksForDate();
  }

  // shows when task has been added to database
  public showUserTaskCreatedResponse(userTaskName: string) {
    console.log("created task named:");
    console.log(userTaskName);
  }

  // shows when something went wrong 
  public showUserTaskNotCreatedResponse(message: string) {
    console.log(message);
  }

  // creating new user via usertask service and processing response we got from it, to not forget status 201 means CREATED, refresh lists at the end of the method
  public createNewUserTask(value: any) {
    
    const createNewUserTask: UserTask = {
      name: value.value,
      completed: false,
      // it sets date as currently showing
      scheduleDate: this.dateToShow,
      importantTask: false
    }

    this.userTaskService.onPostNewTask(createNewUserTask).subscribe((responseData) => {
      // we fire propert method based on status from API 
      responseData.status == 201 ? this.showUserTaskCreatedResponse(createNewUserTask.name) : this.showUserTaskNotCreatedResponse("Something went wrong");
      this.fetchTasksForDate();
    });

    value.value = "";
  }

  showAllScheduledUserTasks() {
    this.userTaskService.onFetchAllScheduledTasks().subscribe((responseList) => {
      this.notCompletedTasks = responseList;
      this.completedTasks = [];
      this.setIsCompletedTasksListyEmpty();
      this.setIsScheduledTasksListEmpty();
      this.isBothListsEmpty = this.isScheduledTasksListEmpty;
      this.dateToShow = this.todayDate;
      this.allTasks = true;
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

  isUserTaskNameValid(userTaskName: any) {
    return userTaskName.value.length > 0;
  }

  validateUserTaskNameAndCreateNewUserTask(value: any) {
    if(this.isUserTaskNameValid(value)) {
      this.createNewUserTask(value)
    } else {
      this.showUserTaskNotCreatedResponse("Task name can not be empty!");
      this.isUserTaskNameInputInvalid = true;

      const myTimeout = setTimeout(() => {
        this.isUserTaskNameInputInvalid = false;
      }, 2000);
    }
  }
}
