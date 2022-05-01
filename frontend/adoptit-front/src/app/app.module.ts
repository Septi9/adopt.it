import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import {RouterModule} from "@angular/router";
import { RegistersuccessComponent } from './registersuccess/registersuccess.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { FooterComponent } from './footer/footer.component';
import { Subpage1Component } from './subpage1/subpage1.component';
import { Subpage2Component } from './subpage2/subpage2.component';
import { Subpage3Component } from './subpage3/subpage3.component';
import { Subpage4Component } from './subpage4/subpage4.component';


const MATERIAL_MODULES = [
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatGridListModule,
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    LoginsuccessComponent,
    MainpageComponent,
    RegistersuccessComponent,
    NavbarComponent,
    FooterComponent,
    Subpage1Component,
    Subpage2Component,
    Subpage3Component,
    Subpage4Component,


  ],
  imports: [
    MATERIAL_MODULES,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatToolbarModule,
    RouterModule.forRoot([
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', component: MainpageComponent },
    ]),
    BrowserAnimationsModule

  ],
  exports: [
    MATERIAL_MODULES
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
