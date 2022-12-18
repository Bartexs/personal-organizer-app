import { Injectable } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LandingPageService {

  constructor(private authService: AuthService, private router: Router) { 

  }

  rerouteIfUserLoggedIn() {
    if(!this.authService.isUserLoggedIn) {
      this.router.navigate(['/dashboard']);
    }
  }
}
