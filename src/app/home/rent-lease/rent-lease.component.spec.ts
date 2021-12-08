import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RentLeaseComponent } from './rent-lease.component';

describe('RentLeaseComponent', () => {
  let component: RentLeaseComponent;
  let fixture: ComponentFixture<RentLeaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RentLeaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RentLeaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
