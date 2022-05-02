import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {NavbarComponent} from "../navbar/navbar.component";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private _service : RegistrationService, private _router : Router, private loginservice: AuthenticationService) { }

  ngOnInit(): void {
  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data =>{
        this.loginservice.authenticate(this.user.emailId);
        console.log("response recieved");
        this._router.navigate(['/adopt'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Bad credentials, please enter valid email id and password";
      }
    )
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }

}
