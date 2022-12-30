import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationsListService } from 'src/app/notifications/notifications-list/notifications-list.service';
import { NotificationsUtilityService } from 'src/app/notifications/notifications-utility.service';
import { AppUser } from 'src/app/models/AppUser.model';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private notifService: NotificationsListService, private notifUtils: NotificationsUtilityService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.registerUserForm(form).subscribe({
      next: (respondOK) => {
        console.log(respondOK);
        form.reset();
        this.notifService.setNotification(this.notifUtils.createAppUserRegisteredNotification(respondOK));
      },
      error: (respondError) => {
        this.notifService.setNotification(this.notifUtils.createAppUserNotRegistered());
        form.reset();
      },
    })
  }
}
