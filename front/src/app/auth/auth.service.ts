import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    signup() {
        // this.http.post()
        let username = "user";
        let password = "70305918-42cd-4807-a5ef-bc45562e48bb";

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });


        let pathToPost = 'http://localhost:8080/res'
    
        return this.http.get('http://localhost:8080/res' , {headers,responseType:'text' as'json'});
    }

    createNewUser() {
        return this.http.get('http://localhost:8080/create');
    }
}