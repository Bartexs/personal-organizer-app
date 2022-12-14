import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { HttpParams } from "@angular/common/http";
import { AppUser } from "../models/AppUser.model";
import { AppUserRole } from "../models/AppUserRoles.model";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    // this one is working retrieve if needed
    login(form: NgForm) {
        let username = form.control.get("email")?.value;
        let password = form.control.get("password")?.value;

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });

        console.log(headers);

        return this.http.get('http://localhost:8080/login' , {headers, responseType: 'text'});
    }

    onlyFetchFromLogin() {
        let username = "user";
        let password = "password";

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });

        return this.http.get('http://localhost:8080/user', {headers,responseType:'text' as'json'});
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
}