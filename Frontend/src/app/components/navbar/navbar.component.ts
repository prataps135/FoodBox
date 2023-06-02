import { Component, ViewChild, DoCheck } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements DoCheck{
  @ViewChild('sidenav') sidenav: MatSidenav;

  opened: boolean;
  auth:string;

  constructor(
    private authService:AuthenticationService
  ){}


  ngDoCheck(){
    this.auth=this.authService.getAuth();
  }

  

  clickHandler() {
    this.sidenav.close();
  }
}
