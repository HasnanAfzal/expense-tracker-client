import { Component } from '@angular/core';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog/dialog-ref';
import { Vendor } from 'src/app/models/vendor.type';

@Component({
  selector: 'app-view-vendor',
  templateUrl: './view-vendor.component.html',
  styleUrls: ['./view-vendor.component.scss']
})
export class ViewVendorComponent {

  vendor!: Vendor;

  constructor(private dialog: DialogRef, private dialogConfig: DialogConfig) {
    this.vendor = this.dialogConfig.data.vendor;
  }

  closeDialog() {
    this.dialog.close();
  }

}
