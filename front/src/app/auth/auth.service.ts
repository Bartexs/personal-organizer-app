import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AppUser } from "../models/AppUser.model";
import { AppUserRole } from "../models/AppUserRoles.model";
import { AuthTokensData } from "./AuthTokensData.model"
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, ReplaySubject, Subject } from "rxjs";

@Injectable({providedIn: 'root'})
export class AuthService {
    private authResponseData!: AuthTokensData;
    private appUserSource = new BehaviorSubject<AppUser | null>(null);

    constructor(private http: HttpClient, private router: Router) {
        this.setAppUserSourceFromLocalStorage();
    }

    setAppUserSourceFromLocalStorage() {
        let dataFromLocalStorage = localStorage.getItem('appUser');

        if(dataFromLocalStorage == null) {
            this.setAppUser(null);
        } else {
            this.setAppUser(JSON.parse(localStorage.getItem('appUser')!));
        }
    }

    getAppUser(): Observable<AppUser | null> {
        return this.appUserSource.asObservable();
    }

    setAppUser(appUser: AppUser | null) {
        this.appUserSource.next(appUser);
    }

    login(form: NgForm) {
        this.sendLoginRequest(form).subscribe((response) => {
            this.setAuthTokensData(response);
            this.setLocalStorageTokensData(response);
            this.setLocalStorageAppUser();
            this.router.navigate(['/dashboard']);
        });
    }

    private setLocalStorageAppUser() {
        this.fetchAppUser().subscribe((recAppUser) => {
            localStorage.setItem('appUser', JSON.stringify(recAppUser));
        });
    }
    
    sendLoginRequest(form: NgForm) {
        let username = form.control.get("email")?.value;
        let password = form.control.get("password")?.value;

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });

        return this.http.get<AuthTokensData>('http://localhost:8080/login' , {headers});
    }

    setLocalStorageTokensData(authTokensData: AuthTokensData) {
        localStorage.setItem('authReponseData', JSON.stringify(authTokensData));
    }

    setAuthTokensData(value: AuthTokensData) {
        this.authResponseData = value;
    }

    getAuthTokensData() {
        return this.authResponseData;
    }

    registerUser(form: NgForm) {
         let username = form.control.get("email")?.value;
         let password = form.control.get("password")?.value;

         const appUser: AppUser = {
            name: username,
            username: username,
            password: password,
            appUserRole: AppUserRole.USER
         }

        return this.http.post('http://localhost:8080/register' , appUser);
    }

    logoutUser() {
        localStorage.clear();
        this.router.navigate(['/landing-page']);
    }

    fetchAppUser() {
        return this.http.get<AppUser>('http://localhost:8080/user');
    }
}