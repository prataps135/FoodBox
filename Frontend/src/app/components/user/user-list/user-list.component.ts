import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  users:User[];

  constructor(
    private userService:UserService,
    private router:Router
  ){}

  ngOnInit(): void {
      this.userService.getAllUser().subscribe(
        data => this.users = data,
        err => console.log("This is error",err)
      );
      console.log(this.users);
  }

  updateUser(id:number){
    this.router.navigate([`update-user/${id}`])
  }

  deleteUser(id:number){
    this.userService.deleteUser(id).subscribe(
      data => alert("User deleted successfully!!"),
      err => console.log("this is error",err)
    );
  }

  userDetail(id:number){
    this.router.navigate([`user-details/${id}`]);
  }
}
