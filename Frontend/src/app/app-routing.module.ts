import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminListComponent } from './components/admin/admin-list/admin-list.component';

const routes: Routes = [
  { path: 'admin-list', component: AdminListComponent },
  // {path:'',redirectTo:'/navbar'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
