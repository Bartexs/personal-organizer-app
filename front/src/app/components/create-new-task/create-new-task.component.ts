import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task.model'
import { UserTask } from 'src/app/models/UserTask.model';
import { TasksListService } from 'src/app/services/tasks-list.service';
import { UserTaskService } from 'src/app/services/user-task.service';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() emitUserTaskCreatedNotification = new EventEmitter<void>();
  @Input() defaultDatePickerDate!: string;
  creatingNewHabitForm!: FormGroup;
  
  createTask!: UserTask;

  constructor(private userTaskService : UserTaskService) { }

  ngOnInit(): void {
    this.setCreatingNewHabitForm();
    console.log(this.defaultDatePickerDate);
  }

  emitCloseNotification() {
    this.closeModal.emit();
  }

  private setCreatingNewHabitForm() {
    this.creatingNewHabitForm = new FormGroup({
      'name': new FormControl(),
      'description': new FormControl(),
      'scheduleDatePicker': new FormControl(this.defaultDatePickerDate),
    });
  }

  public onSubmitCreatingNewHabitForm() {

    const createNewTask: UserTask = {
      name: this.creatingNewHabitForm.value.name,
      completed: false,
      scheduleDate: this.creatingNewHabitForm.value.scheduleDatePicker,
      importantTask: false
    }

      this.userTaskService.onPostNewTask(createNewTask).subscribe((responseData) => {
        console.log(responseData.statusText);

        if(responseData.status == 201) {
          console.log("Really ok");
        }
      })

      this.emitCloseNotification();
  }
}
