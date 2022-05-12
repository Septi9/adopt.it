import {Component, OnInit, Input} from '@angular/core';
import {User} from "../user";
import {UserService} from "../userService/user.service";
import {SharedService} from "../shared/shared.service";

@Component({
  selector: 'app-adoptpage',
  templateUrl: './adoptpage.component.html',
  styleUrls: ['./adoptpage.component.sass']
})
export class AdoptpageComponent implements OnInit {

  users: User[];

  user = new User();

  constructor(private userService: UserService, private shared: SharedService) {
  }

  ngOnInit(): void {
    this.getUsers();
  }

  private getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    });
  }


}
