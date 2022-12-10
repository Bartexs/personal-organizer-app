import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import { NgForm } from "@angular/forms";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    login() {
        let username = "user";
        let password = "70305918-42cd-4807-a5ef-bc45562e48bb";

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });
        
        return this.http.get('http://localhost:8080/login' , {headers,responseType:'text' as'json'});
    }

    registerUser(form: NgForm) {
         let username = form.control.get("email")?.value;
         let password = form.control.get("password")?.value;

        return this.http.post('http://localhost:8080/register' , {username: username, password: password});
    }
}