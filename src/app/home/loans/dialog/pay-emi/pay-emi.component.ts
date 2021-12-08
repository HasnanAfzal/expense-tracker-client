import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_MOMENT_DATE_ADAPTER_OPTIONS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepicker } from '@angular/material/datepicker';
import * as moment from 'moment';
import { Moment } from 'moment';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { PayedEMI } from 'src/app/models/payed-emi.type';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL', 
  },
  display: {
    dateInput: 'MMMM YYYY', // this is the format showing on the input element
    monthYearLabel: 'MMMM YYYY', // this is showing on the calendar 
  },
};

@Component({
  selector: 'app-pay-emi',
  templateUrl: './pay-emi.component.html',
  styleUrls: ['./pay-emi.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class PayEmiComponent implements OnInit {

  createPayedEmiForm: FormGroup = new FormGroup({
    payEMI: new FormGroup({
      interestAmountCharged: new FormControl(null),
      emiAmount: new FormControl(null, Validators.required),
      emiMonth: new FormControl(null, Validators.required)
    }),
    closingLoan: new FormGroup({
      loanClosingDate: new FormControl(null),
      closingCharges: new FormControl(null),
      remainingAmountPaid: new FormControl(null),
      additionalInfo: new FormGroup({})
    })
    
  });

  closingTheLoan: Boolean = false;

  additionalFieldNames: Array<string> = [];

  payedEMIs: Array<PayedEMI> = [{
    loanId: '1',
    emiAmount: 14541,
    emiMonth: new Date('01 September 2021'),
    interestAmountCharged: 2346
  }];

  onNewFieldCreated(fieldName: string) {
    this.additionalFieldNames.push(fieldName);
    const additionalInfoFormGroup = (this.createPayedEmiForm.controls.closingLoan as FormGroup).controls.additionalInfo as FormGroup;
    additionalInfoFormGroup.addControl(fieldName, new FormControl(null));
  }

  onClosngThisLoanEarlyChange() {
    this.closingTheLoan = !this.closingTheLoan;
  }

  chosenMonthHandler(selectedDate: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = moment();
    ctrlValue.year(selectedDate.year());
    ctrlValue.month(selectedDate.month());
    this.createPayedEmiForm.get('emiMonth')?.setValue(ctrlValue);
    datepicker.close();
  }

  constructor(private confirmDialog: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  onDeletePayedEMIClick(payedEMI: PayedEMI) {
    this.confirmDialog.open(`Are you sure, you want to delete the payed EMI entry for ${moment(payedEMI.emiMonth).format('MMM YYYY')}`);
  }

  onSubmit() {

  }

}
