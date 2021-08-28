import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { PaymentSourceType } from 'src/app/models/payment-source-type.type';

@Component({
  selector: 'app-edit-add-payment-source',
  templateUrl: './add-edit-payment-source.component.html',
  styleUrls: ['./add-edit-payment-source.component.scss']
})
export class AddEditPaymentSourceComponent implements OnInit {

  isEdit: boolean = false;

  addEditPaymentSourceForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'paymentSourceType': new FormControl(null, Validators.required)
  })

  paymentSourceTypes: Array<PaymentSourceType> = [{
    _id: '1',
    name: 'Owned'
  }, {
    _id: '2',
    name: 'Borrowed'
  }];


  constructor(private dialogConfig: DialogConfig) {
    this.isEdit = !!this.dialogConfig.data;
    if (this.isEdit) {
      const { paymentSource } = this.dialogConfig.data;
      this.addEditPaymentSourceForm.setValue({
        name: paymentSource.name,
        paymentSourceType: paymentSource.paymentSourceType._id
      });


    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
