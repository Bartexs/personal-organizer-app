import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Task } from 'src/app/models/task.model'
import { TasksListService } from 'src/app/services/tasks-list.service';

@Component({
  selector: 'app-create-new-task',
  templateUrl: './create-new-task.component.html',
  styleUrls: ['./create-new-task.component.css']
})
export class CreateNewTaskComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Input() defaultDatePickerDate!: string;
  creatingNewHabitForm!: FormGroup;
  createdSuccessfully!: boolean;
  isFormValid!: boolean;
  id!: number;
  showSubTaskList!: boolean;
  createTask!: Task;

  constructor(private tskService : TasksListService) { }

  ngOnInit(): void {
    this.setCreatingNewHabitForm();
    this.setId();
  }

  closeModalWindow() {
    this.closeModal.emit();
  }

  private setCreatingNewHabitForm() {
    this.creatingNewHabitForm = new FormGroup({
      'name': new FormControl(null),
      'description': new FormControl(null),
      'dateDuePicker': new FormControl(this.defaultDatePickerDate),
      'isTaskUsingTimerCheckBox': new FormControl(null),
      'isTaskHasSubTaskListCheckBox': new FormControl(null)
    });
  }

  private setId() {
    this.tskService.generateIdForNewTask().subscribe((generatedId) => {
      this.id = generatedId;
    })
  }

  public checkBoxHasBeenChanged() {
    this.showSubTaskList == true ? this.showSubTaskList = false : this.showSubTaskList = true;
  }

  public onSubmitCreatingNewHabitForm() {
    let countTimePerDay: boolean;
    let hasSubTasks: boolean;

    // toogle valused based on input form from user
    this.creatingNewHabitForm.value.isTaskUsingTimerCheckBox == true ? countTimePerDay = true : countTimePerDay = false;
    this.creatingNewHabitForm.value.isTaskHasSubTaskListCheckBox == true ? hasSubTasks = true : hasSubTasks = false;

    this.showSubTaskList = hasSubTasks;

    console.log(this.creatingNewHabitForm);

    // we generate new task based on having subtasks list or not
    if(this.showSubTaskList) {
      const createTask: Task = {
        id: this.id,
        name: this.creatingNewHabitForm.value.name,
        markedAsCompleted: false,
        dateDue: this.creatingNewHabitForm.value.dateDuePicker,
        countTimePerDay: countTimePerDay,
        hasSubTasks: hasSubTasks
        // subTaskMap?: Map<String, Boolean>;
      }
      this.createTask = createTask;
    } else {
      const createTask: Task = {
        id: this.id,
        name: this.creatingNewHabitForm.value.name,
        markedAsCompleted: false,
        dateDue: this.creatingNewHabitForm.value.dateDuePicker,
        countTimePerDay: countTimePerDay,
        hasSubTasks: hasSubTasks
      }
      this.createTask = createTask;
    }

    //
    this.isFormValid = this.creatingNewHabitForm.valid;

    //if form is valid we post new task to backend and close modal window, else we print message based on wrong value 
    if(this.isFormValid) {
      this.tskService.onPostNewTask(this.createTask);
      this.closeModalWindow();
    } else {
      // print msg that form is invalid
    }
  }
}
