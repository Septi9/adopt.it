import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-subpage4',
  templateUrl: './subpage4.component.html',
  styleUrls: ['./subpage4.component.sass']
})
export class Subpage4Component implements OnInit {

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
