import { Injectable, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class NavBarService {


  constructor(private authService: AuthService) { }

  ngOnInit() {

  }
}
  




