import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit {
  user: User;
  userForm: FormGroup;

  constructor(
    private userService: UserService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.userForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl(''),
      phoneNo: new FormControl(''),
      address: new FormGroup({
        street: new FormControl(''),
        city: new FormControl(''),
        zipcode: new FormControl('')
      })
    });
  }

  onSubmit() {
    this.setUserValue();
    this.addUser(this.user);
  }

  addUser(user: User): void {
    this.userService.addUser(user).subscribe(
      data => alert("User added successfully!!"),
      err => console.log("This is error", err)
    );
  }

  setUserValue(): void {
    this.user.name = this.name?.value;
    this.user.email = this.email?.value;
    this.user.password = this.password?.value;
    this.user.phoneNo = this.phoneNo?.value;
    this.user.address = this.address?.value;
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get phoneNo() {
    return this.userForm.get('phoneNo');
  }

  get address() {
    return this.userForm.get('address');
  }
}
