import { Component, OnInit } from '@angular/core';
import {Adoptions} from "../adoptions";
import {AdoptService} from "../adopt/adopt.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.sass']
})
export class TestComponent implements OnInit {

  adoptions = new Adoptions();
  animal
  msg='';

  constructor(private _service : AdoptService, private _router : Router) { }

  ngOnInit(): void {
  }

  success() {
    this._service.create(this.adoptions).subscribe(
      data => {
        console.log("dziala");
        this._router.navigate(['/'])
      },
      error => {
        console.log("nie dziala");
        this.msg = error.error;
      }
    )
  }

}
