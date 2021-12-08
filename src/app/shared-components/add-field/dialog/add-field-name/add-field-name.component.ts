import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogRef } from 'src/app/dialog/dialog-ref';

@Component({
  selector: 'app-add-field-name',
  templateUrl: './add-field-name.component.html',
  styleUrls: ['./add-field-name.component.scss']
})
export class AddFieldNameComponent implements OnInit {

  createFieldNameForm = new FormGroup({
    fieldName: new FormControl(null, Validators.required)
  })

  constructor(private dialog: DialogRef) { }

  onCreateFieldClick() {
    if (this.createFieldNameForm.valid) {
      this.dialog.close(this.createFieldNameForm.value.fieldName);
    }
  }

  ngOnInit(): void {
  }

}
