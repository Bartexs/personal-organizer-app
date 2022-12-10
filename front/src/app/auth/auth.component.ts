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
        this.authService.login().subscribe((response) => {
            console.log(response);
        });
        form.reset();
    }
}