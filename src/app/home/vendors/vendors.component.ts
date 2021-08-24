import { Component, OnInit } from '@angular/core';
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

  vendors: Array<Vendor> = [];

  ngOnInit(): void {
    this.vendors = [{
      name: 'Amazon',
      vendorType: {
        _id: '1',
        name: 'Online'
      },
      address: '',
      website: ''
    },
    {
      name: 'Flipkart',
      vendorType: {
        _id: '2',
        name: 'Online'
      },
      address: '',
      website: ''
    },
    {
      name: 'Vishnu Garden',
      vendorType: {
        _id: '3',
        name: 'Hotel'
      }
    }];

  }

  openAddEditVendorDialog(vendor?: Vendor) {

    if (!vendor) {
      this.dialogService.open(AddEditVendorComponent, {
        size: 'LARGE',
        title: 'Add Vendor Details'
      });
    } else {
      this.dialogService.open(AddEditVendorComponent, {
        size: 'LARGE',
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
    const confirmDialogRef = this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${vendor.name} vendor?`
      }
    });

    confirmDialogRef.afterClosed.subscribe((result: Boolean) => {
    });

  }

}

