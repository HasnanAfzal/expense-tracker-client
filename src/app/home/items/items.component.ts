import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Item } from 'src/app/models/Item.type';
import { EditItemComponent } from './dialog/edit-item/edit-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items!: Array<Item>;

  createItemForm: FormGroup = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private formBuilder: FormBuilder,
    private confirmDialog: ConfirmDialogService,
    private dialog: DialogService) { }

  ngOnInit(): void {
    this.items = [{
      _id: '1',
      name: 'Apple'
    },
    {
      _id: '2',
      name: 'PineApple'
    },
    {
      _id: '3',
      name: 'Mango'
    },
    {
      _id: '4',
      name: 'Vim'
    },
    {
      _id: '5',
      name: 'Surf Excel'
    },
    {
      _id: '6',
      name: 'Rice'
    }];

  }

  onDeleteClick(item: Item) {
    this.confirmDialog.open(`Are you sure, you want to delete ${item.name} item?`);
  }

  onEditClick(item: Item) {
    this.dialog.open(EditItemComponent, {
      data: {
        item
      },
      title: 'Edit Item Details'
    });
  }

  onSubmit(): void {
    
  }

}
