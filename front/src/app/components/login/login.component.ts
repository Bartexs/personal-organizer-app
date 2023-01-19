import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NotificationsListService } from 'src/app/notifications/notifications-list/notifications-list.service';
import { NotificationsUtilityService } from 'src/app/notifications/notifications-utility.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private notifService: NotificationsListService, private notifUtils: NotificationsUtilityService) { }

  ngOnInit(): void {
  }

  onSubmitLoginForm(form: NgForm) {
      const loginData = this.authService.convertFromNgFormToLoginData(form);
      this.authService.loginMainMethod(loginData);
      form.reset();
  }

  public rerouteToRegister() {
    this.router.navigate(['/register']);
  }
}
