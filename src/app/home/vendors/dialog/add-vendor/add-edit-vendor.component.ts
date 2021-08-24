import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { VendorType } from 'src/app/models/vendor-type.type';
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
    website: new FormControl(null),
    vendorType: new FormControl(null, Validators.required),
  })

  vendorTypes: Array<VendorType> = [{
    name: 'Online',
    _id: '1'
  }, {
    name: 'Mart',
    _id: '2'
  }, {
    name: 'Telephonic',
    _id: '3'
  }]

  filteredVendorTypes: Array<VendorType> = this.vendorTypes;

  state:string = '';

  onClose: EventEmitter<void> = new EventEmitter<void>();


  constructor(private dialogConfig: DialogConfig) {
    this.isEditMode = !!this.dialogConfig.data;
  }

  ngOnInit(): void {

    if (this.isEditMode) {
      const { vendor } = this.dialogConfig.data;
      this.addEditVendorForm.setValue({
        name: vendor.name,
        address: vendor.address || '',
        website: vendor.website || '',
        vendorType: vendor.vendorType,
      });
    }

    this.addEditVendorForm.get('vendorType')?.valueChanges.subscribe((value: string | VendorType) => {
      if (typeof value === 'string') {
        this.filteredVendorTypes = this.vendorTypes.filter(v => v.name.toLowerCase().includes(value.toLowerCase()));
      } 
    });
  }

  onSubmit(): void {

  }

  displayProperty(value: VendorType): string {
    if (value) {
      return value.name;
    }
    return '';
  }

}
