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
import { AuthenticationService } from './services/authentication.service';
import { PortelComponent } from './components/admin/portel/portel.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { CartComponent } from './components/order/cart/cart.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { AdminRegistrationComponent } from './components/admin/admin-registration/admin-registration.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserRegistrationComponent } from './components/user/user-registration/user-registration.component';
import { CartService } from './services/cart.service';


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
    PortelComponent,
    UserListComponent,
    OrderListComponent,
    CartComponent,
    AdminRegistrationComponent,
    UpdateAdminComponent,
    UpdateUserComponent,
    UserRegistrationComponent,

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
    UserService,
    AuthenticationService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
