import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Vendor } from 'src/app/models/vendor.type';
import { AddEditVendorComponent } from './dialog/add-vendor/add-edit-vendor.component';
import { ViewVendorComponent } from './dialog/view-vendor/view-vendor.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {

  constructor(private dialogService: DialogService, private confirmDialog: ConfirmDialogService) { }

  createVendorForm = new FormGroup({
    'name': new FormControl(null, Validators.required)
  })

  vendors: Array<Vendor> = [];

  onSubmit(): void {
    
  }

  ngOnInit(): void {
    this.vendors = [{
      name: 'Amazon',
      address: 'Amazo.in'
    },
    {
      name: 'Flipkart',
      address: 'Flipkart.in'
    },
    {
      name: 'Vishnu Garden',
      address: 'R T Nagar Main Road'
    }];

  }

  openAddEditVendorDialog(vendor?: Vendor) {

    if (!vendor) {
      this.dialogService.open(AddEditVendorComponent, {
        title: 'Add Vendor Details'
      });
    } else {
      this.dialogService.open(AddEditVendorComponent, {
        title: 'Edit Vendor Details',
        data: {
          vendor
        }
      }); 
    }


  }

  viewVendorDetails(vendor: Vendor) {
    this.dialogService.open(ViewVendorComponent, {
      size: 'LARGE',
      title: 'Vendor Details',
      data: {
        vendor
      }
    });
  }

  deleteVendor(vendor: Vendor) {
    const confirmDialogRef = this.confirmDialog.open(`Are you sure, you want to delete ${vendor.name} vendor?`);

    confirmDialogRef.afterClosed.subscribe((result: Boolean) => {
    });

  }

}

