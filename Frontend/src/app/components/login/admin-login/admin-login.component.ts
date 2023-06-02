import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {
  admin: Admin;
  loginForm: FormGroup;

  constructor(
    private adminService: AdminService
  ) { }

  ngOnInit(): void {
    // this.admin = new Admin();
    this.loginForm = new FormGroup({
      email: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });

    // console.log(this.loginForm.get('email'));
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      alert("Email and password required");
    } else {
      this.checkingAdmin();
    }
  }

  checkingAdmin() {
    const email = this.loginForm.get('email')?.value;
    const password = this.loginForm.get('password')?.value;
    this.adminService.getByEmail(email).subscribe(
      data => this.admin = data,
      err => console.log('This is error ', err)
    );

    if (this.admin === null || this.admin === undefined) {
      alert("Email or Password invalid");
    } else {
      if (this.admin.password === password) {
        alert("login successful!")
      }
      else {
        alert("Email or Password invalid");
      }
    }
  }

  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }
}
