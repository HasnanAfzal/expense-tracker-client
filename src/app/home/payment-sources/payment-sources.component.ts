import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { PaymentSource } from 'src/app/models/payment-source.type';
import { AddEditPaymentSourceComponent } from './dialog/add-edit-payment-source/add-edit-payment-source.component';

@Component({
  selector: 'app-payment-sources',
  templateUrl: './payment-sources.component.html',
  styleUrls: ['./payment-sources.component.scss']
})
export class PaymentSourcesComponent implements OnInit {

  paymentSources: Array<PaymentSource> = [];

  constructor(private confirmDialog: ConfirmDialogService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.paymentSources.push({
      name: 'ICICI Credit Card',
      _id: '1',
      paymentSourceType: {
        _id: '2',
        name: 'Borrowed'
      }
    },
    {
      name: 'GPay',
      _id: '2',
      paymentSourceType: {
        _id: '1',
        name: 'Owned'
      }
    },
    {
      name: 'HDFC Credit Card',
      _id: '1',
      paymentSourceType: {
        _id: '1',
        name: 'Owned'
      }
    });
  }

  deletePaymentSource(paymentSource: PaymentSource) {
    this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${paymentSource.name} payment source?`
      }
    });
  }

  openAddPaymentSource() {
    this.dialog.open(AddEditPaymentSourceComponent, {
      title: 'Add Payment Source'
    });
  }

  openEditPaymentSource(paymentSource: PaymentSource) {
    this.dialog.open(AddEditPaymentSourceComponent, {
      title: 'Add Payment Source',
      data: {
        paymentSource
      }
    });
  }



}
