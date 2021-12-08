import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Recharge } from 'src/app/models/recharge.type';
import { AddEditRechargeComponent } from './dialog/add-edit-recharge/add-edit-recharge.component';

@Component({
  selector: 'app-recharges',
  templateUrl: './recharges.component.html',
  styleUrls: ['./recharges.component.scss']
})
export class RechargesComponent {

  recharges: Array<Recharge> = [{
    paymentDate: new Date('24 April 2021'),
    vendor: {
      name: 'VI',
      address: ''
    },
    lables: [{
      name: 'Test',
      _id: '1'
    }],
    accountId: '8553786256',
    name: 'VI 149',
    expiresAfter: 90,
    renewalDate: new Date('23 May 2021'),
    amount: 149,
    fundSource: {
      name: 'ICICI credit card',
      _id: '1',
      fundSourceType: {
        name: 'Borrowed',
        _id: '1'
      }
    }
  }];

  constructor(private dialog: DialogService, private confirmDialog: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  onAddEditRechargeClick(recharge?: Recharge) {
    if (recharge) {
      this.dialog.open(AddEditRechargeComponent, {
        size: 'LARGE',
        title: 'Edit Recharge',
        data: recharge
      });
    } else {
      this.dialog.open(AddEditRechargeComponent, {
        size: 'LARGE',
        title: 'Create Recharge'
      });
    }
  }

  onDeleteRechargeClick(recharge: Recharge) {
    this.confirmDialog.open('Are you sure, you want to delete the recharge?');
  }

}
