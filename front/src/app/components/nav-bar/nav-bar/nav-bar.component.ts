import { Component, OnDestroy, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { AppearanceService } from '../../settings/appearance.service';
import { NavBarService } from './nav-bar.service';
import { Router } from '@angular/router';
import { AppUserTimeCounterService } from 'src/app/services/app-user-time-counter.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated!: boolean;
  appUserName!: string;
  colorSchemaBackgroundColor = ColorSchema.DEFAULT.mainColor;
  isDemoAccount: boolean = false;

  constructor(private authService: AuthService, private appearenceService: AppearanceService, private appUserTimeCounter: AppUserTimeCounterService) { 
  }

  ngOnInit(): void {
    this.subscribeToGettingAppUser();
    this.subscribeToGettingColorSchema();
  }

  private subscribeToGettingColorSchema() {
    this.appearenceService.getColorSchemaObservable().subscribe((color) => {
      this.colorSchemaBackgroundColor = color.mainColor;
    })
  }

  public subscribeToGettingAppUser() {
    this.authService.getAppUser().subscribe(
      recData => {
        if(recData !== null) {
          this.isAuthenticated = true;
          this.setIsDemoAccount(recData.name);
          this.appUserName = recData.name;
          this.appUserTimeCounter.countCurrentSessionTime();
        } else {
          this.appUserName = "";
          this.isAuthenticated = false;
          this.appUserTimeCounter.stopCountCurrentSessionTime();
        }
    });
  }

  private setIsDemoAccount(accountName: string) {
    this.isDemoAccount = accountName == "DEMO ACCOUNT";
  }

  public logoutAppUser() {
    this.authService.logoutUser();
  }
}
