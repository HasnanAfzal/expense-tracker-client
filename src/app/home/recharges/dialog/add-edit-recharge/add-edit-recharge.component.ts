import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogService } from 'src/app/dialog/dialog.service';
import { filterArr } from 'src/app/helpers/common';
import { requireMatch } from 'src/app/helpers/requireMatch';
import { FundSource } from 'src/app/models/fund-source.type';
import { Label } from 'src/app/models/label.type';
import { Recharge } from 'src/app/models/recharge.type';
import { Vendor } from 'src/app/models/vendor.type';

@Component({
  selector: 'app-add-edit-recharge',
  templateUrl: './add-edit-recharge.component.html',
  styleUrls: ['./add-edit-recharge.component.scss']
})
export class AddEditRechargeComponent implements OnInit {

  createRechargeForm: FormGroup = new FormGroup({
    vendor: new FormControl(null, [Validators.required, requireMatch]),
    labels: new FormControl(null),
    accountId: new FormControl(null, Validators.required),
    rechargeName: new FormControl(null, Validators.required),
    paymentDate: new FormControl(new Date(), Validators.required),
    expiresAfter: new FormControl(null, Validators.required),
    renewalDate: new FormControl(null, Validators.required),
    fundSource: new FormControl(null, [Validators.required, requireMatch])
  });

  vendors: Array<Vendor> = [{
    name: 'Amazon',
    address: '',
  },
  {
    name: 'Flipkart',
    address: '',
  },
  {
    name: 'Vishnu Garden',
    address: ''
  }];

  filteredVendors : Array<Vendor> = this.vendors;

  labels: Array<Label> = [{
    name: 'Hotels',
    _id: '1'
  }, {
    name: 'Groming',
    _id: '2'
  }, {
    name: 'Food',
    _id: '3'
  }]

  fundSources: Array<FundSource> = [{
    name: 'ICICI Credit Card',
    _id: '1',
    fundSourceType: {
      name: 'Borrowed',
      _id: '1'
    }
  },
  {
    name: 'HDFC Debit Card',
    _id: '2',
    fundSourceType: {
      name: 'Owned',
      _id: '2'
    }
  },
  {
    name: 'Cash',
    _id: '3',
    fundSourceType: {
      name: 'Owned',
      _id: '3'
    }
  }]

  filteredFundSources: Array<FundSource> = this.fundSources;

  editMode: Boolean = false;

  constructor(private dialogConfig: DialogConfig, private dialog: DialogService) {
    const recharge: Recharge = this.dialogConfig.data;
    if (recharge) {
      this.editMode = true;
      this.createRechargeForm.setValue({
        vendor: recharge.vendor,
        labels: recharge.lables || [],
        accountId: recharge.accountId,
        rechargeName: recharge.name,
        paymentDate: recharge.paymentDate,
        expiresAfter: recharge.expiresAfter,
        renewalDate: recharge.renewalDate,
        fundSource: recharge.fundSource
      });
    }
  }

  displayProperty(value: any): string {
    if (value) {
      return value.name;
    }
    return '';
  }

  ngOnInit(): void {
    this.createRechargeForm.get('vendor')?.valueChanges.subscribe((value: string) => {
      this.filteredVendors = filterArr(value, this.vendors);
    });

    this.createRechargeForm.get('fundSource')?.valueChanges.subscribe((value: string) => {
      this.filteredFundSources = filterArr(value, this.fundSources);
    });
  }

}
