import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification.service';
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
    private userService: UserService,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.user = new User();
    this.userForm = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl('',[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      phoneNo: new FormControl('',Validators.required),
      address: new FormGroup({
        street: new FormControl('',Validators.required),
        city: new FormControl('',Validators.required),
        zipcode: new FormControl('',Validators.required)
      })
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      this.notificationService.showWarning("Can't able to add user", "Foodbox");
    } else {
      this.setUserValue();
      this.addUser(this.user);
    }
  }

  addUser(user: User): void {
    this.userService.addUser(user).subscribe(
      data => this.notificationService.showSuccess("User added successfully", "Foodbox"),
      err => this.notificationService.showWarning("Can't able to add user", "Foodbox")
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

  get street(){
    return this.address?.get('street');
  }

  get city(){
    return this.address?.get('city');
  }

  get zipcode(){
    return this.address?.get('zipcode');
  }
}
