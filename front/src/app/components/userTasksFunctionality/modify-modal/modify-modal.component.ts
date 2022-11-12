import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserTask } from 'src/app/models/UserTask.model';

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.css']
})
export class ModifyModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<any>();
  @Input() modifyUserTask!: UserTask;


  constructor() { }

  ngOnInit(): void {
  }

  public emitCloseModal() {
    this.closeModal.emit();
  }

  public setDay(value: number) {
    let newDateFoUserTask: Date;
    newDateFoUserTask = new Date(this.modifyUserTask.dateTaskToBeDone);

    function addDays(date: any, value: number) {
      var result = new Date(date);
      result.setDate(result.getDate() + value);
      return result;
    }

    newDateFoUserTask = addDays(newDateFoUserTask, value);
    const stringDate = newDateFoUserTask.toISOString().split('T')[0]

    this.modifyUserTask.dateTaskToBeDone = stringDate;
  }
}
