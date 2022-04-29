import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginsuccessComponent} from "./loginsuccess/loginsuccess.component";
import {RegistrationComponent} from "./registration/registration.component";
import {MainpageComponent} from "./mainpage/mainpage.component";
import {RegistersuccessComponent} from "./registersuccess/registersuccess.component";
import {Subpage1Component} from "./subpage1/subpage1.component";

const routes: Routes = [
  {path:'', component:MainpageComponent},
  {path:'loginsuccess',component:LoginsuccessComponent},
  {path:'registersuccess',component:RegistersuccessComponent},
  {path:'registration',component:RegistrationComponent},
  {path:'login',component:LoginComponent},
  {path:'tygrys', component:Subpage1Component}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'}),
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
