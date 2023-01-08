import { Injectable } from '@angular/core';
import { AppUser } from '../models/AppUser.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppUserService {

  constructor(private http: HttpClient) { 
    
  }

  fetchAppUser() {
    return this.http.get<AppUser>('http://localhost:8080/user');
  }
  
  sendRegisterNewAppUserRequest(appUser: AppUser) {
    return this.http.post<AppUser>('http://localhost:8080/register' , appUser);
  }
}
