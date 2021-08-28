import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog/dialog-ref';

@Component({
  selector: 'app-edit-label',
  templateUrl: './edit-label.component.html',
  styleUrls: ['./edit-label.component.scss']
})
export class EditLabelComponent implements OnInit {

  editLabelForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private dialogConfig: DialogConfig, private dialog: DialogRef) {
    this.editLabelForm.setValue({
      name: this.dialogConfig.data.label.name
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialog.close();
  }

}
