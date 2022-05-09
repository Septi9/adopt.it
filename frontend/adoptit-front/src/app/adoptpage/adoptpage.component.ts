import { Component, OnInit } from '@angular/core';
import {User} from "../user";
import {RegistrationService} from "../registration.service";
import {UserService} from "../userService/user.service";

@Component({
  selector: 'app-adoptpage',
  templateUrl: './adoptpage.component.html',
  styleUrls: ['./adoptpage.component.sass']
})
export class AdoptpageComponent implements OnInit {

  users: User[];

  user = new User();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.getUsers();
  }

  private getUsers(){
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }



}
