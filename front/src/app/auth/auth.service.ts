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
    private appUserSource = new ReplaySubject<AppUser>;

    constructor(private http: HttpClient, private router: Router) {

    }

    getAppUser(): Observable<AppUser> {
        return this.appUserSource.asObservable();
    }

    setAppUser(appUser: AppUser) {
        this.appUserSource.next(appUser);
    }

    login(form: NgForm) {
        this.sendLoginRequest(form).subscribe((response) => {
            this.setAuthTokensData(response);
            this.setLocalStorageTokensData(response);
            this.router.navigate(['/dashboard']);
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
    }

    fetchAppUser() {
        return this.http.get<AppUser>('http://localhost:8080/user');
    }
}