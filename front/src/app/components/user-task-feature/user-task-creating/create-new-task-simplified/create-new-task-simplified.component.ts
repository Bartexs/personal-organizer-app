import { Component, OnInit } from '@angular/core';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { UserTask } from 'src/app/models/UserTask.model';
import { CreateUserTaskService } from '../create-user-task.service';

@Component({
  selector: 'app-create-new-task-simplified',
  templateUrl: './create-new-task-simplified.component.html',
  styleUrls: ['./create-new-task-simplified.component.css']
})

export class CreateNewTaskSimplifiedComponent implements OnInit {
  isUserTaskNameInputInvalid = false;
  createNewTaskModal = false;
  defaultDateForTaskCreation!: any;

  constructor(private userTasksListService: UserTasksListService, private createUserTask: CreateUserTaskService) { }

  ngOnInit(): void {
    this.subscribeUserTasksListServiceDate();
  }

  public subscribeUserTasksListServiceDate() {
    return this.userTasksListService.getMessage().subscribe((msg) => {
      this.defaultDateForTaskCreation = msg;
    });
  }

  // creating new user via usertask service and processing response we got from it, to not forget status 201 means CREATED, refresh lists at the end of the method
  public createNewUserTask(value: any) {
    const createNewUserTask: UserTask = {
      name: value.value,
      completed: false,
      // it sets date as currently showing
      scheduleDate: this.defaultDateForTaskCreation,
      importantTask: false
    }

    this.createUserTask.onCreateUserTask(createNewUserTask);

    value.value = "";
  }

  isUserTaskNameValid(userTaskName: any) {
    return userTaskName.value.length > 0;
  }

  validateUserTaskNameAndCreateNewUserTask(value: any) {
    if(this.isUserTaskNameValid(value)) {
      this.createNewUserTask(value)
    } else {
      this.isUserTaskNameInputInvalid = true;

      const myTimeout = setTimeout(() => {
        this.isUserTaskNameInputInvalid = false;
      }, 2000);
    }
  }
}
