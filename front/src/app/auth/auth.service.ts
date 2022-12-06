import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";

@Injectable({providedIn: 'root'})
export class AuthService {
    constructor(private http: HttpClient) {

    }

    signup() {
        // this.http.post()

        let objectToSend = {
            username: "user",
            password: "ba81e6e5-d377-40a3-a902-4cf341cfa7cf"
        }

        let pathToPost = 'http://localhost:8080/login'
        return this.http.post(pathToPost, objectToSend);
    }

    checkIfLogged() {
        let pathToGet = 'http://localhost:8080/user'
        return this.http.get(pathToGet);
    }
}