import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { catchError, Observable, throwError } from "rxjs";
import { AuthService } from "./auth.service";
import { Token } from "@angular/compiler";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
    constructor(private authService : AuthService) {
        
    }
    
    intercept(
        req: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {

        return next.handle(this.addAuthToken(req)).pipe((
            catchError((error: HttpErrorResponse) => {
                if (error instanceof HttpErrorResponse && error.status === 403) {
                    this.authService.logoutUser();
                }
                return throwError(() => error);
            }))
        );
    }

    addAuthToken(request: HttpRequest<any>) {

        if(localStorage.getItem('authReponseData') == null) {
            return request;
        } 

        function getAuthResponseData(authAsString: string) {
            return authAsString;
        }
        
        const authResponseData = JSON.parse(getAuthResponseData(localStorage.getItem('authReponseData')!));

        return request.clone({
            setHeaders: {
                Authorization: `Bearer ${authResponseData.access_token}`,
            }
        });
    }
}