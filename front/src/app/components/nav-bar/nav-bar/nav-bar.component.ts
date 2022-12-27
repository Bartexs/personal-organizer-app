import { Component, OnDestroy, OnInit } from '@angular/core';
import { exhaustMap, Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AppUser } from 'src/app/models/AppUser.model';
import { ColorSchema } from 'src/app/models/ColorSchema.model';
import { AppearanceService } from '../../settings/appearance.service';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  isAuthenticated!: boolean;
  appUserName!: string;
  colorSchemaBackgroundColor = ColorSchema.DEFAULT.mainColor;

  constructor(private authService: AuthService, private navBarService: NavBarService, private appearenceService: AppearanceService ) { 
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
          this.appUserName = recData.name;
        } else {
          this.appUserName = "";
          this.isAuthenticated = false;
        }
    });
  }

  public logoutAppUser() {
    this.authService.logoutUser();
  }
}
