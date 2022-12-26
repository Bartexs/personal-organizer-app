import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { AppUserRole } from 'src/app/models/AppUserRoles.model';
import { AppUser } from 'src/app/models/AppUser.model';

interface LoginData {
  username: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private authService: AuthService, private router: Router) { 
  }

  ngOnInit() {
  }

  onTryAsAnonymousUser() {
    let appUser = this.createRandomAppUser();
    let loginData: LoginData;
    this.authService.sendRegisterNewAppUserRequest(appUser).subscribe((data) => {
      console.log("Registered anonymous user:");
      console.log(data);
      loginData.username = "adssad";
      loginData.password = "asdas";
      this.authService.loginMainMethod(loginData);
    });
  }

  private createRandomAppUser() {
    let randomUsername = "demoUsername" + this.getRandomInt(99999999);
    let randomPassword = "demoPassword" + this.getRandomInt(99999999);

    const appUser: AppUser = {
      name: "demo account",
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
