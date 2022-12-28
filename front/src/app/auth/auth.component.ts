import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Subject } from "rxjs";
import { AppUser } from "../models/AppUser.model";
import { AppUserRole } from "../models/AppUserRoles.model";
import { AuthService } from "./auth.service";



@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    constructor(private authService: AuthService) {

    }

    // onSubmitLoginForm(form: NgForm) {
    //     this.authService.login(form);
    //     form.reset();
    // }

    // logout() {
    //     this.authService.logoutUser();
    // }
}