import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { Token } from "@angular/compiler";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService : AuthService) {
        
    }
    
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.addAuthToken(req));
    }

    addAuthToken(request: HttpRequest<any>) {

        if(localStorage.getItem('authReponseData') == null) {
            console.log("no token");
            return request;
        } 

        function getAuthResponseData(authAsString: string) {
            return authAsString;
        }
        
        const authResponseData = JSON.parse(getAuthResponseData(localStorage.getItem('authReponseData')!));

        console.log("there is token");
        console.log(authResponseData.access_token);
        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${authResponseData.access_token}`,
            }
        });
    }
}