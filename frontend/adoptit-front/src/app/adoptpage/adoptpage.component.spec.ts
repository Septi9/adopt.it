import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdoptpageComponent } from './adoptpage.component';

describe('AdoptpageComponent', () => {
  let component: AdoptpageComponent;
  let fixture: ComponentFixture<AdoptpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdoptpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdoptpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
