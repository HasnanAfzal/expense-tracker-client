import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog/dialog-ref';

@Component({
  selector: 'app-edit-unit',
  templateUrl: './edit-unit.component.html',
  styleUrls: ['./edit-unit.component.scss']
})
export class EditUnitComponent implements OnInit {

  editUnitForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private dialogConfig: DialogConfig, private dialog: DialogRef) {
    this.editUnitForm.setValue({
      name: this.dialogConfig.data.unit.name
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialog.close();
  }

}
