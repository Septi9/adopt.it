import {Component, HostListener, OnInit} from '@angular/core';
import {AuthenticationService} from "../authentication/authentication.service";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  private pageYoffset: number;

  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(public loginService:AuthenticationService, private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollToUpFunction() {
    this.scroll.scrollToPosition([0,0]);
  }

}
