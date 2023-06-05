import { Component,OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit{
  admin:Admin;
  id:number;

  constructor(
    private adminService:AdminService,
    private router:Router,
    private activatedRoute:ActivatedRoute
  ){}

  ngOnInit(): void {
    this.admin = new Admin();
    this.id = this.activatedRoute.snapshot.params['id'];

    this.adminService.getById(this.id).subscribe(
      data => this.admin = data,
      err => console.log("This is error",err)
    );
      
  }

  updateAdmin(id:number,admin:Admin){
    this.adminService.updateAdmin(id,admin).subscribe(
      data => alert("Admin update successfully!!"),
      err => console.log("This is error",err)
    );
  }
  onSubmit(){
    this.updateAdmin(this.id,this.admin);
    // this.router.navigate(['admin-list']);
  } 
}
