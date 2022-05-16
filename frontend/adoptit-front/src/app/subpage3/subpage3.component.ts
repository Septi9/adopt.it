import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-subpage3',
  templateUrl: './subpage3.component.html',
  styleUrls: ['./subpage3.component.sass']
})
export class Subpage3Component implements OnInit {

  private pageYoffset: number;

  @HostListener('window:scroll', ['$event']) onScroll(event){
    this.pageYoffset = window.pageYOffset;
  }

  constructor(private scroll: ViewportScroller) { }

  ngOnInit(): void {
  }

  scrollFunction() {
    this.scroll.scrollToAnchor("section");
  }

}
