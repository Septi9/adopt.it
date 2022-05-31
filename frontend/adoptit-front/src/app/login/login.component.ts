import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormBuilder, FormGroup, NgForm} from '@angular/forms';
import {RegistrationService} from "../registration.service";
import {User} from "../user";
import {Router} from "@angular/router";
import {AuthenticationService} from "../authentication/authentication.service";
import {NavbarComponent} from "../navbar/navbar.component";
import {AdoptpageComponent} from "../adoptpage/adoptpage.component";
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  user = new User();
  msg = '';

  constructor(private _service: RegistrationService, private _router: Router, private loginservice: AuthenticationService, private shared: SharedService) {
  }



  ngOnInit(): void {

  }

  loginUser() {
    this._service.loginUserFromRemote(this.user).subscribe(
      data => {
        this.loginservice.authenticate(this.user.emailId);
        console.log("response recieved");
        this._router.navigate(['/adopt'])
      },
      error => {
        console.log("exception occured");
        this.msg = "Niepoprawne dane wejściowe, sprawdź login i hasło.";
      }
    )
  }

  gotoregistration() {
    this._router.navigate(['/registration']);
  }


}
