import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit{
  user:User;
  id:number;

  constructor(
    private userService:UserService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
      this.user = new User();
      this.id = this.activatedRoute.snapshot.params['id'];

      this.userService.getByid(this.id).subscribe(
        data => this.user = data,
        err => console.log("This is error",err)
      );
  }

  updateUser(id:number,user:User){
    this.userService.updateUser(id,user).subscribe(
      data => alert("User updated successfully"),
      err => console.log("This is error",err)
    );
  }

  onSubmit(){
    this.updateUser(this.id,this.user);
  }
}
