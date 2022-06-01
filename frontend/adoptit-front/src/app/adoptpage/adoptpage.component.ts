import {Component, OnInit, Input} from '@angular/core';
import {User} from "../user";
import {UserService} from "../userService/user.service";
import {SharedService} from "../shared/shared.service";
import {Adoptions} from "../adoptions";
import {AdoptService} from "../adopt/adopt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-adoptpage',
  templateUrl: './adoptpage.component.html',
  styleUrls: ['./adoptpage.component.sass']
})
export class AdoptpageComponent implements OnInit {

  users: User[];
  animals: Adoptions[];

  user = new User();
  adoptions = new Adoptions();
  sessionValue
  animal
  value
  msg='';

  constructor(private userService: UserService, private shared: SharedService, private _service : AdoptService, private _router : Router) {
  }

  ngOnInit(): void {
    this.getUsers();
    this.getAdoptions();
    this.sessionValue = sessionStorage.getItem('email');
    this.adoptions.email = this.sessionValue;
  }

  private getUsers() {
    this.userService.getUsersList().subscribe(data => {
      this.users = data;
    },
      error => {
        console.log("nie dziala users");
        this.msg = error.error;
      });
  }

  private getAdoptions() {
    this._service.getAdoptionsList().subscribe(data => {
      this.animals = data;
    },
      error => {
        console.log("nie dziala adoptions");
        this.msg = error.error;
        console.log(error)
      });
  }

  getAnimal(arg) {
    this.adoptions.animal = arg;
  }

  showPassword() {
    this.value = document.getElementById("passwordInput");
    if (this.value.type === "password") {
      this.value.type = "text";
    } else {
      this.value.type = "password";
    }
  }

  success() {
    this._service.create(this.adoptions).subscribe(
      data => {
        console.log("dziala");
        this._router.navigate(['/adopt'])
      },
      error => {
        console.log("nie dziala");
        this.msg = error.error;
      }
    )
  }


}
