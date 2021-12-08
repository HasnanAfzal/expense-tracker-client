import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Label } from 'src/app/models/label.type';
import { EditLabelComponent } from './dialog/edit-label/edit-label.component';

@Component({
  selector: 'app-labels',
  templateUrl: './labels.component.html',
  styleUrls: ['./labels.component.scss']
})
export class LabelsComponent implements OnInit {

  labels!: Array<Label>;

  createLabelForm = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private confirmDialog: ConfirmDialogService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.labels = [{
      _id: '1',
      name: 'Breakfast'
    },
    {
      _id: '2',
      name: 'Groaming'
    },
    {
      _id: '3',
      name: 'Dinner'
    },
    {
      _id: '4',
      name: 'Hotels'
    }];
  }

  onSubmit(): void {

  }

  onDeleteClick(label: Label) {
    this.confirmDialog.open(`Are you sure, you want to delete ${label.name} label?`);
  }

  onEditClick(label: Label) {
    this.dialog.open(EditLabelComponent, {
      title: 'Edit Label Details',
      data: {
        label
      }
    });
  }

}
