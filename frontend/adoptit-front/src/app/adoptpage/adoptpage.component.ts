import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {User} from "../user";
import {RegistrationService} from "../registration.service";

@Component({
  selector: 'app-adoptpage',
  templateUrl: './adoptpage.component.html',
  styleUrls: ['./adoptpage.component.sass']
})
export class AdoptpageComponent implements OnInit {

  user = new User();

  constructor(private registrationService: RegistrationService) { }

  ngOnInit(): void {
    // this.reloadData();
  }

  // reloadData() {
  //   this.users = this.registrationService.getUsersList();
  // }



}
