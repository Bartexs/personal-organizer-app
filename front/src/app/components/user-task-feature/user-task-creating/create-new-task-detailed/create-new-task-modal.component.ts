import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, NgForm } from '@angular/forms';
import { UserTask } from 'src/app/models/UserTask.model';
import { UserTaskService } from 'src/app/services/user-task.service';
import { Validators } from '@angular/forms';
import { UserTasksListService } from 'src/app/services/user-tasks-list.service';
import { NotificationsListService } from 'src/app/notifications/notifications-list/notifications-list.service';
import { OrganizerNotification } from 'src/app/models/OrganizerNotification.model';
import { StatusTypes } from 'src/app/notifications/statusTypesEnum/StatusTypes.model';
import { CreateUserTaskService } from '../create-user-task.service';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task-modal.component.html',
  styleUrls: ['./create-new-task-modal.component.css']
})
export class CreateNewTaskComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() emitUserTaskCreatedNotification = new EventEmitter<void>();
  @Input() defaultDatePickerDate!: string;
  creatingNewHabitForm!: FormGroup;
  
  createTask!: UserTask;

  constructor(private userTaskService : UserTaskService, private userTasksListService: UserTasksListService, private notificationsService: NotificationsListService, private createUserTask: CreateUserTaskService) { }

  ngOnInit(): void {
    this.setCreatingNewHabitForm();
  }

  emitCloseNotification() {
    this.closeModal.emit();
  }

  private setCreatingNewHabitForm() {
    this.creatingNewHabitForm = new FormGroup({
      'name': new FormControl('', Validators.required),
      'description': new FormControl(),
      'scheduleDatePicker': new FormControl(this.defaultDatePickerDate),
      'color': new FormControl()
    });
  }

  public onCreateUserTask() {
    let userTask = this.createUserTaskObject(this.creatingNewHabitForm);
    this.createUserTask.onCreateUserTask(userTask);
    this.emitCloseNotification();
  }

  private createUserTaskObject(form: FormGroup): UserTask {
    const createNewTask: UserTask = {
      name: form.value.name,
      completed: false,
      scheduleDate: form.value.scheduleDatePicker,
      importantTask: false
    }
    return createNewTask;
  }

  // public onSubmitCreatingNewHabitForm() {
  //   let userTask = this.createUserTaskObject();
  //   let notification = this.createOrganizerNotification(userTask);

  //     this.userTaskService.onPostNewTask(userTask).subscribe((responseData) => {
  //       console.log(responseData.statusText);
  //       if(responseData.status == 201) {
  //         this.userTasksListService.fetchTasksEmit();
  //         this.notificationsService.setNotification(notification);
  //       }
  //     })
  //     this.emitCloseNotification();
  // }

  // private createUserTaskObject(): UserTask {
  //   const createNewTask: UserTask = {
  //     name: this.creatingNewHabitForm.value.name,
  //     completed: false,
  //     scheduleDate: this.creatingNewHabitForm.value.scheduleDatePicker,
  //     importantTask: false
  //   }
  //   return createNewTask;
  // }

  // private createOrganizerNotification(userTask: UserTask): OrganizerNotification {
  //   let msg = "Created task named '" + userTask.name + "'!";

  //   let notification: OrganizerNotification = {
  //     message: msg,
  //     statusType: StatusTypes.Success
  //   }

  //   return notification;
  // }
}
