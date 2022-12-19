import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';
import { AppUser } from 'src/app/models/AppUser.model';
import { NavBarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit, OnDestroy {
  isAuthenticated!: boolean;
  appUserName!: string;

  constructor(private authService: AuthService, private navBarService: NavBarService) { 
    
  }

  ngOnInit(): void {
    this.authService.fetchAppUser().subscribe(
      recData => {
      this.isAuthenticated = true;
      this.appUserName = recData.name;
    });
  }

  ngOnDestroy(): void {

  }
}
