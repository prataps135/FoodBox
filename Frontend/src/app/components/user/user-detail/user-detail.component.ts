import { Component,OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit{
  user:User;
  id:number;

  constructor(
    private activatedRoute:ActivatedRoute,
    private userService:UserService
  ){}

  ngOnInit(): void {
      this.id = this.activatedRoute.snapshot.params['id'];
      this.userService.getByid(this.id).subscribe(
        data => this.user = data,
        err => alert("Can't able to fetch user")
      );
  }
}
