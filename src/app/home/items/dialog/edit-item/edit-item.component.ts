import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog/dialog-ref';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.scss']
})
export class EditItemComponent implements OnInit {

  editItemForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private dialogConfig: DialogConfig, private dialog: DialogRef) {
    this.editItemForm.setValue({
      name: this.dialogConfig.data.item.name
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialog.close();
  }

}
