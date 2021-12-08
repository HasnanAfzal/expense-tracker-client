import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Label } from 'src/app/models/label.type';
import { Vendor } from 'src/app/models/vendor.type';

@Component({
  selector: 'app-add-edit-loan',
  templateUrl: './add-edit-loan.component.html',
  styleUrls: ['./add-edit-loan.component.scss']
})
export class AddEditLoanComponent implements OnInit {

  editMode: Boolean = false;

  createLoanForm: FormGroup = new FormGroup({
    loanName: new FormControl(null, Validators.required),
    loanStartDate: new FormControl(null, Validators.required),
    loanDuration: new FormControl(null, Validators.required),
    loanAmount: new FormControl(null, Validators.required),
    loanInterestDate: new FormControl(null, Validators.required),
    loanEndDate: new FormControl(null, Validators.required),
    vendor: new FormControl(null, Validators.required),
    emiDueDay: new FormControl(null, Validators.required),
    emiAmount: new FormControl(null, Validators.required),
    labels: new FormControl(null),
    additionalInfo: new FormGroup({})
  });

  labels: Array<Label> = []

  filteredVendors: Array<Vendor> = [];

  additionalInfoFieldNames: Array<string> = [];

  displayProperty(): string {
    return '';
  }

  onNewFieldCreated(fieldName: any) {
    this.additionalInfoFieldNames.push(fieldName);
    const additionalInfoFormGroup = this.createLoanForm.controls.additionalInfo as FormGroup;

    additionalInfoFormGroup.addControl(fieldName, new FormControl(null));
    
  }

  constructor(private dialog: DialogService) { }

  ngOnInit(): void {
  }

}
