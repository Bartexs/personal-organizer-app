import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/notifications/notifications-list/notifications-list.service';

@Component({
  selector: 'app-delete-conf-modal',
  templateUrl: './delete-conf-modal.component.html',
  styleUrls: ['./delete-conf-modal.component.css']
})
export class DeleteConfModalComponent implements OnInit {
  @Output() closeModal = new EventEmitter<void>();
  @Output() deleteUserTaskConfirmed = new EventEmitter<void>();
  @Input() userTasksToDeleteName!: string;

  constructor(private notifService: NotificationService ) { }

  ngOnInit(): void {
    console.log(this.userTasksToDeleteName);
  }

  closeModalWindow() {
    this.closeModal.emit();
  }

  confirmDeletingUserTask() {
    this.deleteUserTaskConfirmed.emit();
    this.notifService.setNotificationModeWithTimeout("success");
  }
}
