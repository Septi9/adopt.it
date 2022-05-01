import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage4Component } from './subpage4.component';

describe('Subpage4Component', () => {
  let component: Subpage4Component;
  let fixture: ComponentFixture<Subpage4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subpage4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
