import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginsuccessComponent} from "./loginsuccess/loginsuccess.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainpageComponent} from "./mainpage/mainpage.component";

const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
