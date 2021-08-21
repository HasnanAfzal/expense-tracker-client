import { Component, ComponentFactoryResolver, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Vendor } from 'src/app/models/vendor.type';
import { PlaceHolderDirective } from 'src/app/shared-directives/place-holder.directive';
import { AddEditVendorComponent } from './dialog/add-vendor/add-edit-vendor.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.scss']
})
export class VendorsComponent implements OnInit {
  @ViewChild(PlaceHolderDirective, { static: true }) dialogHost!: PlaceHolderDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private dialogService: DialogService) { }

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
        height: '100%',
        title: 'Add Vendor Details'
      });
    } else {
      this.dialogService.open(AddEditVendorComponent, {
        height: '100%',
        title: 'Edit Vendor Details',
        data: {
          vendor
        }
      }); 
    }


  }

}

