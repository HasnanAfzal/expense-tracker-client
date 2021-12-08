import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-building',
  templateUrl: './add-edit-building.component.html',
  styleUrls: ['./add-edit-building.component.scss']
})
export class AddEditBuildingComponent implements OnInit {

  createBuildingForm: FormGroup = new FormGroup({
    name: new FormControl(null, Validators.required),
    address: new FormControl(null),
    startDate: new FormControl(),
    endDate: new FormControl(null),
    isRented: new FormControl(true)
  });

  constructor() { }

  ngOnInit(): void {
  }

}
