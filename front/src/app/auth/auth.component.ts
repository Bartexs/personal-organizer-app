import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthService } from "./auth.service";



@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    constructor(private authService: AuthService) {

    }

    onSubmitLoginForm(form: NgForm) {
        this.authService.responseAfterLogin(form);
    }

    fetchLogin() {
        this.authService.onlyFetchFromLogin().subscribe((response) => {
            console.log(response);
        }) 
    }
}