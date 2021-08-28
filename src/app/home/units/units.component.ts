import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Unit } from 'src/app/models/unit.type';
import { EditUnitComponent } from './dialog/edit-unit/edit-unit.component';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
  styleUrls: ['./units.component.scss']
})
export class UnitsComponent implements OnInit {

  units!: Array<Unit>;

  createUnitForm = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private confirmDialog: ConfirmDialogService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.units = [{
      _id: '1',
      name: 'KG'
    },
    {
      _id: '2',
      name: 'Plate'
    },
    {
      _id: '3',
      name: 'Packet'
    },
    {
      _id: '4',
      name: 'Box'
    }];
  }

  onSubmit(): void {

  }

  onDeleteClick(unit: Unit) {
    this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${unit.name} unit?`
      }
    });
  }

  onEditClick(unit: Unit) {
    this.dialog.open(EditUnitComponent, {
      title: 'Edit Unit Details',
      data: {
        unit
      }
    });
  }

}
