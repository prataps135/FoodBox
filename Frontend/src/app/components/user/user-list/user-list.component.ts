import { Component,OnInit } from '@angular/core';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit{
  user:User[];

  constructor(
    private userService:UserService
  ){}

  ngOnInit(): void {
      this.userService.getAllUser().subscribe(
        data => this.user = data,
        err => console.log("This is error",err)
      );
  }
}
