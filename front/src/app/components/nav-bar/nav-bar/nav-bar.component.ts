import { Component, OnDestroy, OnInit } from '@angular/core';
import { exhaustMap, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AppUser } from 'src/app/models/AppUser.model';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated!: boolean;
  appUserName!: string;

  constructor(private authService: AuthService, private navBarService: NavBarService) { 
  }

  ngOnInit(): void {
    this.subscribeToGettingAppUser();
  }

  public subscribeToGettingAppUser() {
    this.authService.getAppUser().subscribe(
      recData => {
        if(recData !== null) {
          this.isAuthenticated = true;
          this.appUserName = recData.name;
        } else {
          this.isAuthenticated = false;
        }
    });
  }

  public logoutAppUser() {
    this.authService.logoutUser();
  }
}
