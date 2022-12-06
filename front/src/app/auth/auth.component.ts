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

    onSubmit(form: NgForm) {
        console.log(form.value);
        this.authService.signup().subscribe((response) => {
            console.log(response);
        });
        form.reset();
    }

    checkIfLogged() {
        this.authService.checkIfLogged().subscribe((response) => {
            console.log(response);
        })
    }
}