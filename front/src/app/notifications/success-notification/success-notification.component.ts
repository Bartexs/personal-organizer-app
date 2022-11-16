import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-success-notification',
  templateUrl: './success-notification.component.html',
  styleUrls: ['./success-notification.component.css']
})
export class SuccessNotificationComponent implements OnInit {
  @Input() message!: {messageContent: string, objectType: string};
  objectTypeNameToShow!: string;
  @Output() closeNotification = new EventEmitter<void>();

  constructor() { }

  ngOnInit(): void {
    this.setObjecTypeNameToShow();
  }

  emitCloseNotification() {
    this.closeNotification.emit();
  }

  setObjecTypeNameToShow() {
    switch(this.message.objectType) {
      case "userTask":
        this.objectTypeNameToShow = "Task";
        break;
    }
  }
}
