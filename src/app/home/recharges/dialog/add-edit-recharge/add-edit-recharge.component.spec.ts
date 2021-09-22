import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditRechargeComponent } from './add-edit-recharge.component';

describe('AddEditRechargeComponent', () => {
  let component: AddEditRechargeComponent;
  let fixture: ComponentFixture<AddEditRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditRechargeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
