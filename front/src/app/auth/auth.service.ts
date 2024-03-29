import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { AppUser } from "../models/AppUser.model";
import { AppUserRole } from "../models/AppUserRoles.model";
import { AuthTokensData } from "./AuthTokensData.model"
import { Router } from "@angular/router";
import { BehaviorSubject, Observable, ReplaySubject, Subject, take } from "rxjs";
import { NotificationsListService } from "../notifications/notifications-list/notifications-list.service";
import { NotificationsUtilityService } from "../notifications/notifications-utility.service";
import { AppUserService } from "../appUser/app-user.service";

interface LoginData {
    username: string,
    password: string
}

@Injectable({providedIn: 'root'})
export class AuthService {
    

    private authResponseData!: AuthTokensData;
    private appUserSource = new BehaviorSubject<AppUser | null>(null);

    constructor(
        private http: HttpClient, 
        private router: Router, 
        private notifService: NotificationsListService, 
        private notifUtils: NotificationsUtilityService,
        private appUserService: AppUserService
        ) {
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

    private createLoginHeaders(loginData: LoginData) {
        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(loginData.username+":"+loginData.password)
        });
        return headers;
    }

    private onSendLoginRequest(headers: HttpHeaders) {
        return this.http.get<AuthTokensData>('http://localhost:8080/login' , {headers});
    }

    public loginMainMethod(loginData: LoginData) {
        const headers = this.createLoginHeaders(loginData);

        var onSendLoginRequestObservable = this.onSendLoginRequest(headers).pipe(take(1));
        var fetchAppUserObservable = this.appUserService.fetchAppUser().pipe(take(1));
        
        onSendLoginRequestObservable.subscribe((loginResponseTokens) => {
            this.setAuthTokensData(loginResponseTokens);
            this.setLocalStorageTokensData(loginResponseTokens);
            fetchAppUserObservable.subscribe((receivedAppUser) => {
                localStorage.setItem('appUser', JSON.stringify(receivedAppUser));
                this.setAppUser(receivedAppUser);
                this.router.navigate(['/dashboard']);
            });
        });
    }

    public convertFromNgFormToLoginData(form: NgForm): LoginData {
        let username = form.control.get("username")?.value;
        let password = form.control.get("password")?.value;

        let loginData: LoginData;

        loginData = {
            username: username,
            password: password
        }

        return loginData;
    }

    private setLocalStorageAppUser() {
        this.appUserService.fetchAppUser().subscribe((recAppUser) => {
            localStorage.setItem('appUser', JSON.stringify(recAppUser));
        });
    }
    
    // sendLoginRequest(form: NgForm) {
    //     let username = form.control.get("username")?.value;
    //     let password = form.control.get("password")?.value;

    //     const headers = new HttpHeaders({
    //         Authorization: 'Basic '+btoa(username+":"+password)
    //     });

    //     console.log(headers);
    //     return this.http.get<AuthTokensData>('http://localhost:8080/login' , {headers});
    // }

    setLocalStorageTokensData(authTokensData: AuthTokensData) {
        localStorage.setItem('authReponseData', JSON.stringify(authTokensData));
    }

    setAuthTokensData(value: AuthTokensData) {
        this.authResponseData = value;
    }

    getAuthTokensData() {
        return this.authResponseData;
    }

    registerUserForm(form: NgForm) {
         let username = form.control.get("username")?.value;
         let password = form.control.get("password")?.value;

         const appUser: AppUser = {
            name: username,
            username: username,
            password: password,
            appUserRole: AppUserRole.USER
         }

         return this.http.post<AppUser>('http://localhost:8080/register' , appUser);
    }

    logoutUser() {
        localStorage.clear();
        this.setAppUser(null);
    }
}