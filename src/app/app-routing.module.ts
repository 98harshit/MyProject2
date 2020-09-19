import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ViewComponent } from './components/view/view.component';
import { UpdateUserComponent } from './components/view/update-user/update-user.component';

const routes: Routes = [
                       {path:"",component:HomeComponent},
                       {path:"login",component:LoginComponent},
                       {path:"signup",component:SignupComponent},
                       {path:"view",component:ViewComponent},
                      {path:"update/:id",component:UpdateUserComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
