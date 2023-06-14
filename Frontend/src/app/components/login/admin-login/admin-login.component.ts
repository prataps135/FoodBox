import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin;
  loginForm: FormGroup;

  constructor(
    private adminService: AdminService,
    private authService: AuthenticationService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    // this.admin = new Admin();
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ])
    });

    // console.log(this.loginForm.get('email'));
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      this.notificationService.showError("Email and password required", "Foodbox");
    } else {
      this.checkingAdmin();
    }
  }

  checkingAdmin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.adminService.getByEmail(email).subscribe(
      data => {
        this.admin = data;
        if (this.admin === null || this.admin === undefined) {
          this.notificationService.showError("Email or Password invalid", "Foodbox");
        } else {
          if (this.admin.password === password) {
            this.authService.setAuth("Admin");
            this.notificationService.showSuccess("login successful!", "Foodbox");
            this.router.navigate(['home']);
          }
          else {
            this.notificationService.showError("Email or Password invalid", "Foodbox");
          }
        }
      },
      err => this.notificationService.showError("Email or Password invalid", "Foodbox")
    );


  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
