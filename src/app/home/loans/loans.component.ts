import { Component, OnInit } from '@angular/core';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Loan } from '../../models/loan.type';
import { AddEditLoanComponent } from './dialog/add-edit-loan/add-edit-loan.component';
import { PayEmiComponent } from './dialog/pay-emi/pay-emi.component';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans: Array<Loan> = [{
    name: 'Car Loan',
    loanStartDate: new Date('24 April 2018'),
    loanDuration: 60,
    loanAmount: 700000,
    loanInterestDate: 7.9,
    loanEndDate: new Date('24 October 2024'),
    vendor: {
      name: 'Federal Bank',
      address: '',
      _id: '1'
    },
    emiDueDay: 4,
    emiAmount: 14541
  }];

  constructor(private dialog: DialogService, private confirmDialog: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  deleteLoan(loan: Loan) {
    this.confirmDialog.open(`Are you sure, you want to delete ${loan.name}`);
  }

  openEMIDialog(loan?: Loan) {
    this.dialog.open(PayEmiComponent, {
      title: 'Pay EMI',
      size: 'LARGE'
    });
  }

  openAddEditLoanDialog(loan?: Loan) {
    if (loan) {
      this.dialog.open(AddEditLoanComponent, {
        title: 'Edit Loan Details',
        size: 'LARGE',
        data: loan
      });
    } else {
      this.dialog.open(AddEditLoanComponent, {
        title: 'Add Loan Details',
        size: 'LARGE'
      });
    }
  }

}
