import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { FundSourceType } from 'src/app/models/fund-source-type.type';

@Component({
  selector: 'app-edit-add-fund-source',
  templateUrl: './add-edit-fund-source.component.html',
  styleUrls: ['./add-edit-fund-source.component.scss']
})
export class AddEditFundSourceComponent implements OnInit {

  isEdit: boolean = false;

  addEditFundSourceForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required),
    'fundSourceType': new FormControl(null, Validators.required)
  })

  fundSourceTypes: Array<FundSourceType> = [{
    _id: '1',
    name: 'Owned'
  }, {
    _id: '2',
    name: 'Borrowed'
  }];


  constructor(private dialogConfig: DialogConfig) {
    this.isEdit = !!this.dialogConfig.data;
    if (this.isEdit) {
      const { fundSource } = this.dialogConfig.data;
      this.addEditFundSourceForm.setValue({
        name: fundSource.name,
        fundSourceType: fundSource.paymentSourceType._id
      });


    }
  }

  ngOnInit(): void {
  }

  onSubmit() {
    
  }

}
