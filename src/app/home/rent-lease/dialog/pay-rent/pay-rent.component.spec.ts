import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayRentComponent } from './pay-rent.component';

describe('PayRentComponent', () => {
  let component: PayRentComponent;
  let fixture: ComponentFixture<PayRentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PayRentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PayRentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
