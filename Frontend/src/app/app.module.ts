import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppMaterailModule } from './app-materail/app-materail.module';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { ProductService } from './services/product.service';
import { AdminService } from './services/admin.service';
import { UserService } from './services/user.service';


@NgModule({
  declarations: [
    AppComponent,
    AdminListComponent,
    NavbarComponent,
    ProductListComponent,
    AddProductComponent,
    UpdateProductComponent,
    HomeComponent,
    LoginComponent,
    AdminLoginComponent,
    UserLoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppMaterailModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    ProductService,
    AdminService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
