import { Component, OnInit,OnDestroy } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy{
  user: User;
  id: number;
  userForm: FormGroup;

  constructor(
    private userService: UserService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private authService:AuthenticationService,
    private notificationService:NotificationService
  ) { }

  ngOnInit(): void {
    this.user = new User;
    this.id = this.activatedRoute.snapshot.params['id'];
    this.getUserDetails(this.id);
    this.userFormInit();
  }

  ngOnDestroy(): void {
      this.authService.setUser(this.user);
      console.log("User auth set in OnDestroy");
  }

  getUserDetails(id: number): void {
    this.userService.getByid(id).subscribe(
      data => {
        this.user = data;
        // this.notificationService.showInfo("User details fetched","Foodbox");
      },
      err => console.log("This is error", err)
    );
  }

  userFormInit() {
    console.log(this.user);
    this.userForm = new FormGroup({
      name: new FormControl(this.user.name,[
        Validators.required,
        Validators.minLength(5)
      ]),
      email: new FormControl(this.user.email,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      password: new FormControl(this.user.password,[
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(30)
      ]),
      phoneNo: new FormControl(this.user.phoneNo,[
        Validators.required,
        Validators.min(1000000000),
        Validators.max(9999999999)
      ]),
      address: new FormGroup({
        street: new FormControl(this.user.address?.street,Validators.required),
        city: new FormControl(this.user.address?.city,Validators.required),
        zipcode: new FormControl(this.user.address?.zipcode,[
          Validators.required,
          Validators.min(100000),
          Validators.max(999999)
        ])
      })
    });
  }

  onSubmit() {
    this.setUserValue();
    this.updateUser(this.id, this.user);
    setTimeout(() => {
      this.router.navigate(['user-list']);
    }, 3000);
  }

  fetchUser() {
    this.userFormInit();
    this.notificationService.showInfo("User details fetched","Foodbox");
  }

  updateUser(id: number, user: User) {
    this.userService.updateUser(id, user).subscribe(
      data => this.notificationService.showSuccess("User updated successfully","Foodbox"),
      err => this.notificationService.showWarning("Can't able to update","Foodbox")
    );
  }

  setUserValue(): void {
    this.user.name = this.name?.value;
    this.user.email = this.email?.value;
    this.user.password = this.password?.value;
    this.user.phoneNo = this.phoneNo?.value;
    this.user.address = this.address?.value;
    console.log(this.user.address);
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
