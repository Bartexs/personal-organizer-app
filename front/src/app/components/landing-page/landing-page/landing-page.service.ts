import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { AppUserRole } from 'src/app/models/AppUserRoles.model';
import { AppUser } from 'src/app/models/AppUser.model';
import { take } from 'rxjs';
import { AppUserService } from 'src/app/appUser/app-user.service';

interface LoginData {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private authService: AuthService, private router: Router, private appUserService: AppUserService) { 
  }

  ngOnInit() {
  }

  onTryAsAnonymousUser() {
    let appUser = this.createRandomAppUser();
    let loginData = this.createLoginDataFromAppUser(appUser);
    var registerDemoUserObservable = this.appUserService.sendRegisterNewAppUserRequest(appUser).pipe(take(1));

    registerDemoUserObservable.subscribe(() => {
          this.authService.loginMainMethod(loginData);
    });
  }

  private createLoginDataFromAppUser(appUser: AppUser) {
    let loginData: LoginData;
    loginData = {
      username: appUser.username,
      password: appUser.password
    }
    return loginData;
  }

  private createRandomAppUser() {
    let randomUsername = "demoUsername" + this.getRandomInt(99999999);
    let randomPassword = "demoPassword" + this.getRandomInt(99999999);

    const appUser: AppUser = {
      name: "DEMO ACCOUNT",
      username: randomUsername,
      password: randomPassword,
      appUserRole: AppUserRole.USER
   }
   return appUser;
  }

  private getRandomInt(max : number) {
    return Math.floor(Math.random() * max);
  }
}
