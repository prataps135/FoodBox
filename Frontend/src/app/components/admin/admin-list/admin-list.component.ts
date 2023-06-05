import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.scss']
})
export class AdminListComponent implements OnInit{
  admin:Admin[];
  
  constructor(
    private adminService:AdminService,
    private router:Router
  ){}

  ngOnInit(): void {
    this.adminService.getAllAdmin().subscribe(
      data => this.admin = data,
      err => console.log(err)
    );    
  }
  updateAdmin(id:number){
    this.router.navigate([`update-admin/${id}`]);
  }
  deleteAdmin(id:number){
    this.adminService.deleteAdmin(id).subscribe(
      data => alert("Admin deleted successfully!!"),
      err => console.log("This is error",err)
    );
  }
}
