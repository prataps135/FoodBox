import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck{
  @ViewChild('sidenav') sidenav: MatSidenav;

  user:User = new User;
  opened: boolean;
  auth:string;

  constructor(
    private authService:AuthenticationService,
    private router:Router,
    private notificationService:NotificationService
  ){}


  ngDoCheck(){
    this.auth=this.authService.getAuth();
  }

  

  clickHandler() {
    this.sidenav.close();
  }

  logout()  {
    this.authService.setAuth('n/a');
    this.authService.setUser(this.user);
    this.router.navigate(['home']);
    this.notificationService.showInfo("Logout successfull","Foodbox");
  }
}
