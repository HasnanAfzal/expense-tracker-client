import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Building } from 'src/app/models/rent-lease.type';
import { AddEditBuildingComponent } from './dialog/add-edit-building/add-edit-building.component';
import { PayRentComponent } from './dialog/pay-rent/pay-rent.component';

@Component({
  selector: 'app-rent-lease',
  templateUrl: './rent-lease.component.html',
  styleUrls: ['./rent-lease.component.scss']
})
export class RentLeaseComponent implements OnInit {

  constructor(private dialog: DialogService, private confirmDialog: ConfirmDialogService) { }

  buildings: Array<Building> = [{
    name: 'Sara Mansion'
  }]

  ngOnInit(): void {
    this.onPayRentClick({
      name: 'Sara Mansion'
    });
  }

  onAddEditBuildingClick(building?: Building) {
    if (building) {
      this.dialog.open(AddEditBuildingComponent, {
        title: 'Edit Building Details',
        size: 'LARGE',
        data: building
      });
    } else {
      this.dialog.open(AddEditBuildingComponent, {
        title: 'Add Building Details',
        size: 'LARGE'
      });
    }
  }

  onDeleteBuildingClick(building: Building) {
    this.confirmDialog.open(`Are you sure you want to delete ${building.name} building?`);
  }

  onPayRentClick(building: Building) {
    this.dialog.open(PayRentComponent, {
      data: building,
      title: 'Pay Rent',
      size: 'LARGE'
    });
  }

}
