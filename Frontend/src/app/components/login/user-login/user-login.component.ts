import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: User = new User;
  loginForm: FormGroup;

  constructor(
    private userService: UserService,
    private authService: AuthenticationService,
    private router: Router,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
    // this.user = new User;
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30),
      ])
    });

    // console.log(this.loginForm.get('email'));
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.notificationService.showError("Email and password required","Foodbox");
      // console.log(this.email?.errors);
    } else {
      this.checkingAdmin();
    }
  }

  checkingAdmin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.userService.getByEmail(email).subscribe(
      data => {
        this.user = data
        if (this.user === null || this.user === undefined) {
          this.notificationService.showError("Email or Password invalid","Foodbox");
        } else {
          if (this.user.password === password) {
            this.authService.setAuth("User");
            this.authService.setUser(this.user);
            this.notificationService.showSuccess("login successfull","Foodbox");
            this.router.navigate(['home']);
          }
          else {
            this.notificationService.showError("Email or Password invalid","Foodbox");
          }
        }
      },
      err => this.notificationService.showError("Email or Password invalid","Foodbox")
      // console.log('This is error ', err)
    );


  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
