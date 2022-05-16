import {Component, HostListener, OnInit} from '@angular/core';
import {ViewportScroller} from "@angular/common";

@Component({
  selector: 'app-subpage2',
  templateUrl: './subpage2.component.html',
  styleUrls: ['./subpage2.component.sass']
})
export class Subpage2Component implements OnInit {

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
