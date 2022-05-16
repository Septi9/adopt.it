import {Component, HostListener, OnInit} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.sass']
})
export class MainpageComponent implements OnInit {
  private pageYoffset: number;

  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private router: Router, private scroll: ViewportScroller) { }

  ngOnInit(): void {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
  }

  scrollFunction() {
    this.scroll.scrollToAnchor("section");
  }

}
