import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './Homepage/homepage/homepage.component';
import { LoginComponent } from './login/login/login.component';
import { SignupComponent } from './signup/signup/signup.component';
import { HomeComponent } from './Component/home/home.component';
import { AuthGuard } from './guards/auth-guard.service';
import { ForgotPasswordComponent } from './Component/forgot-password/forgot-password.component';

const routes: Routes = [ 
  { path: '',  component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: SignupComponent },
  { path: 'homepage', component: HomepageComponent },
  { path:'forgotPassword', component:ForgotPasswordComponent},
  { path: '**', redirectTo: '' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
