import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {
  admin: Admin;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.admin = new Admin();
  }

  onSubmit(form: NgForm) {
    // console.log(form);
    if (form.invalid) {
      this.notificationService.showError("Please fill details properly", "Foodbox");
    } else {
      this.adminService.addAdmin(this.admin).subscribe(
        data => this.notificationService.showSuccess("Admin added successfully", "Foodbox"),
        err => this.notificationService.showWarning("Can't able to add", "Foodbox")
      );
    }
  }
}
