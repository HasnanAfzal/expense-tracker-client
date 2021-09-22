import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { DialogConfig } from 'src/app/dialog/dialog-config';

@Component({
  selector: 'app-edit-add-vendor',
  templateUrl: './add-edit-vendor.component.html',
  styleUrls: ['./add-edit-vendor.component.scss'],
})
export class AddEditVendorComponent implements OnInit {
  
  isEditMode: Boolean = false;

  addEditVendorForm: FormGroup = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
    address: new FormControl(null),
  })

  constructor(private dialogConfig: DialogConfig) {
    this.isEditMode = !!this.dialogConfig.data;
  }

  ngOnInit(): void {

    if (this.isEditMode) {
      const { vendor } = this.dialogConfig.data;
      this.addEditVendorForm.setValue({
        name: vendor.name,
        address: vendor.address || '',
      });
    }
  }

  onSubmit(): void {

  }

}
