import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './views/admin-home/admin-home.component';
import { LandingComponent } from './views/landing/landing.component';
import { LoginComponent } from './views/login/login.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin', component: AdminHomeComponent } /*, canActivate: [AdminAuthGuard] },*/
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
