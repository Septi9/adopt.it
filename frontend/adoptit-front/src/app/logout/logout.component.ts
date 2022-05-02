import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.sass']
})
export class LogoutComponent implements OnInit {

  constructor(private authentocationService: AuthenticationService, private _router : Router) { }

  ngOnInit(): void {
    this.authentocationService.logOut();
    this._router.navigate(['/login']);
  }

}
