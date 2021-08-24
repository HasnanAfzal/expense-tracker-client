import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogConfig } from 'src/app/dialog/dialog-config';
import { DialogRef } from 'src/app/dialog/dialog-ref';

@Component({
  selector: 'app-edit-category',
  templateUrl: './edit-category.component.html',
  styleUrls: ['./edit-category.component.scss']
})
export class EditCategoryComponent implements OnInit {

  editCategoryForm = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private dialogConfig: DialogConfig, private dialogRef: DialogRef) {
    this.editCategoryForm.setValue({
      'name': this.dialogConfig.data.category.name
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.dialogRef.close();
  }

}
