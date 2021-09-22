import { Component, OnInit } from '@angular/core';
import { Loan } from '../../models/loan.type';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss']
})
export class LoansComponent implements OnInit {

  loans: Array<Loan> = [{
    name: 'Car Loan',
    loanOpenDate: new Date('24/04/2018'),
    loanPeriod: 60,
    loanAmount: 700000,
    loanInterestRate: 7.9,
    loanEnddate: new Date('24/03/2021'),
    vendorId: '1',
    emiDueDay: 4,
    emiAmount: 14541
  }];

  constructor() { }

  ngOnInit(): void {
  }

  deleteLoan(loan: Loan) {

  }

  viewLoanDetails(loan: Loan) {
    
  }

  openAddEditLoanDialog(loan: Loan) {
    
  }

}
