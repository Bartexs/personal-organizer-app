import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-new-subtask-list',
  templateUrl: './create-new-subtask-list.component.html',
  styleUrls: ['./create-new-subtask-list.component.css']
})
export class CreateNewSubtaskListComponent implements OnInit {
  @Output() emitUpdatedSubTasksList = new EventEmitter<string[]>();
  subTasksList = [""];
  isLastInputEmpty!: boolean;
  dummyList!: string[];

  constructor() { }

  ngOnInit(): void {
  }

  public onInputFilled(inputFilled: Event, indexOfInputElement: number) {
    let event = inputFilled.target as HTMLInputElement;
    console.log(event.value);
    console.log(indexOfInputElement);

    this.subTasksList[indexOfInputElement] = event.value;
    console.log(this.subTasksList);
  } 
}
