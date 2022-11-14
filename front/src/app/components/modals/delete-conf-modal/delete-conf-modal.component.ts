import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-conf-modal',
  templateUrl: './delete-conf-modal.component.html',
  styleUrls: ['./delete-conf-modal.component.css']
})
export class DeleteConfModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() deleteUserTaskConfirmed = new EventEmitter<void>();
  @Input() userTasksToDeleteName!: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.userTasksToDeleteName);
  }

  closeModalWindow() {
    this.closeModal.emit();
  }

  confirmDeletingUserTask() {
    this.deleteUserTaskConfirmed.emit();
  }
}
