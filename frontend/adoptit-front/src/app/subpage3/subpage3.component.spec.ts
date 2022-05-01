import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Subpage3Component } from './subpage3.component';

describe('Subpage3Component', () => {
  let component: Subpage3Component;
  let fixture: ComponentFixture<Subpage3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Subpage3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Subpage3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
