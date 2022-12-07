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
        let password = "049f3641-7b7b-4bcf-9aa5-3521894f9842";

        const headers = new HttpHeaders({
            Authorization: 'Basic '+btoa(username+":"+password)
        });


        let pathToPost = 'http://localhost:8080/res'
    
        return this.http.get('http://localhost:8080/res' , {headers,responseType:'text' as'json'});
    }
}