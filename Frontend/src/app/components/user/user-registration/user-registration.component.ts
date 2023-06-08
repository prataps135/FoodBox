import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.scss']
})
export class UserRegistrationComponent implements OnInit{
  user:User;

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
      this.user = new User();
  }

  onSubmit(){
    this.userService.addUser(this.user).subscribe(
      data => alert("User added successfully!!"),
      err => console.log("This is error",err)
    );
  }
}
