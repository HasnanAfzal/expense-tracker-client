import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditBuildingComponent } from './add-edit-building.component';

describe('AddEditBuildingComponent', () => {
  let component: AddEditBuildingComponent;
  let fixture: ComponentFixture<AddEditBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
