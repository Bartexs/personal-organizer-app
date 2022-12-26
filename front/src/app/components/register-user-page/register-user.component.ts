import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    this.authService.registerUserForm(form).subscribe({
      next: (respondOK) => {
        console.log(respondOK);
        form.reset();
      },
      error: (respondError) => {
        console.log("User already exists");
        form.reset();
      },
    })
  }
}
