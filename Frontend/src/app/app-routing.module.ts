import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';
import { ProductListComponent } from './components/product/product-list/product-list.component';
import { AddProductComponent } from './components/product/add-product/add-product.component';
import { UpdateProductComponent } from './components/product/update-product/update-product.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { UserLoginComponent } from './components/login/user-login/user-login.component';
import { AdminLoginComponent } from './components/login/admin-login/admin-login.component';
import { PortelComponent } from './components/admin/portel/portel.component';
import { UserListComponent } from './components/user/user-list/user-list.component';
import { OrderListComponent } from './components/order/order-list/order-list.component';
import { AdminRegistrationComponent } from './components/admin/admin-registration/admin-registration.component';
import { UpdateAdminComponent } from './components/admin/update-admin/update-admin.component';
import { UpdateUserComponent } from './components/user/update-user/update-user.component';
import { UserRegistrationComponent } from './components/user/user-registration/user-registration.component';
import { CartComponent } from './components/order/cart/cart.component';

const routes: Routes = [
  { path: 'admin-list', component: AdminListComponent },
  { path: 'product-list', component: ProductListComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'update-product/:pid', component: UpdateProductComponent },
  { path: 'home', component: HomeComponent },
  { path: 'portel', component: PortelComponent },
  { path: 'user-list', component: UserListComponent },
  { path: 'order-list', component: OrderListComponent },
  { path: 'admin-registration', component: AdminRegistrationComponent },
  { path: 'update-admin/:id', component: UpdateAdminComponent },
  { path: 'update-user/:id', component: UpdateUserComponent },
  { path: 'user-registration', component: UserRegistrationComponent },
  { path: 'cart', component: CartComponent },
  {
    path: 'login', component: LoginComponent,
    children: [

    ]
  },
  { path: 'user-login', component: UserLoginComponent },
  { path: 'admin-login', component: AdminLoginComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
