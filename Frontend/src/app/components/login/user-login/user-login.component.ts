import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  user: User;
  loginForm: FormGroup;

  constructor(
    private userService: UserService
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
    this.userService.getByEmail(email).subscribe(
      data => this.user = data,
      err => console.log('This is error ', err)
    );

    if (this.user === null || this.user === undefined) {
      alert("Email or Password invalid");
    } else {
      if (this.user.password === password) {
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
