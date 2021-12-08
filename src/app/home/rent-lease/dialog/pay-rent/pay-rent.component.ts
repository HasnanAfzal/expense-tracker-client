import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { requireMatch } from 'src/app/helpers/requireMatch';
import { PayedRent } from 'src/app/models/payed-rent.type';
import * as moment from 'moment';
import { Moment } from 'moment';
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';
import { MY_FORMATS } from 'src/app/home/loans/dialog/pay-emi/pay-emi.component';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';

@Component({
  selector: 'app-pay-rent',
  templateUrl: './pay-rent.component.html',
  styleUrls: ['./pay-rent.component.scss'],
  providers: [{
    provide: DateAdapter,
    useClass: MomentDateAdapter,
    deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
  },

  {provide: MAT_DATE_FORMATS, useValue: MY_FORMATS},
  ]
})
export class PayRentComponent implements OnInit {

  createPayedRentForm: FormGroup = new FormGroup({
    rentMonth: new FormControl(null, [Validators.required, requireMatch]),
    rentAmount: new FormControl(null, Validators.required),
    additionalInfo: new FormGroup({})   
  });

  payedRents: Array<PayedRent> = [{
    rentalAmount: 15000,
    rentalMonth: new Date('1 September 2021')
  }];

  additionalFieldNames: Array<string> = [];

  chosenMonthHandler(selectedDate: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = moment();
    ctrlValue.year(selectedDate.year());
    ctrlValue.month(selectedDate.month());
    this.createPayedRentForm.get('rentalMonth')?.setValue(ctrlValue);
    datepicker.close();
  }

  constructor(private confirmDialog: ConfirmDialogService) { }

  ngOnInit(): void {
  }

  onDeletePayedRentClick(payedRent: PayedRent) {
    this.confirmDialog.open(`Are you sure, you want to delete the payed rent entry for ${moment(payedRent.rentalMonth).format('MMM YYYY')}`);
  }

  onNewFieldCreated(fieldName: string) {
    this.additionalFieldNames.push(fieldName);
    const additionalInfoFormGroup = this.createPayedRentForm.controls.additionalInfo as FormGroup;
    additionalInfoFormGroup.addControl(fieldName, new FormControl(null));
  }

}
