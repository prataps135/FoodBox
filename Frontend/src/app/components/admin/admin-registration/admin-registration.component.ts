import { Component,OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit{
  admin:Admin;

  constructor(
    private adminService:AdminService,
    private router:Router
  ){}

  ngOnInit(): void {
      this.admin = new Admin();
  }

  onSubmit(){
    this.adminService.addAdmin(this.admin).subscribe(
      data => alert("Admin added successfully!!"),
      err => console.log("This is error",err)
    );
  }
}
