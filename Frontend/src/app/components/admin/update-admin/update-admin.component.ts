import { Component, OnInit } from '@angular/core';
import { NgControl, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/model/admin';
import { AdminService } from 'src/app/services/admin.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.scss']
})
export class UpdateAdminComponent implements OnInit {
  admin: Admin;
  id: number;

  constructor(
    private adminService: AdminService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
    this.admin = new Admin();
    this.id = this.activatedRoute.snapshot.params['id'];

    this.adminService.getById(this.id).subscribe(
      data => {
        this.admin = data;
        this.notificationService.showInfo("Admin details fetched", "Foodbox");
      },
      err => this.notificationService.showError("Can't able to fetch admin", "Foodbox")
    );

  }

  updateAdmin(id: number, admin: Admin) {
    this.adminService.updateAdmin(id, admin).subscribe(
      data => this.notificationService.showSuccess("Admin update successfully", "Foodbox"),
      err => this.notificationService.showWarning("Can't able to update", "Foodbox")
    );
  }
  onSubmit(form: NgForm) {
    // console.log(name,email,password);
    // console.log(this.admin);

    if (form.invalid) {
      this.notificationService.showError("Please fill details properly", "Foodbox");
    } else {

      this.updateAdmin(this.id, this.admin);
      setTimeout(() => {
        this.router.navigate(['admin-list']);
      }, 3000);
    }

  }
}
