import { Component, OnInit } from '@angular/core';
import {  FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Category } from 'src/app/models/category.type';
import { Item } from 'src/app/models/Item.type';
import { EditItemComponent } from './dialog/edit-item/edit-item.component';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  categories!: Array<Category>;

  createItemForms!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private confirmDialog: ConfirmDialogService,
    private dialog: DialogService) { }

  ngOnInit(): void {
    this.categories = [{
      _id: '1',
      name: 'Fruits',
      items: [{
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
      }]
    },
    {
      _id: '2',
      name: 'Groceries',
      items: [{
        _id: '1',
        name: 'Vim'
      },
      {
        _id: '2',
        name: 'Surf Excel'
      },
      {
        _id: '3',
        name: 'Rice'
      }]
    }];

    const createCategoryFormGroup: { [key: string]: FormControl } = {};
    this.categories.map(c => {
      createCategoryFormGroup[c._id] = new FormControl(null, Validators.required);
    });

    this.createItemForms = this.formBuilder.group(createCategoryFormGroup);

  }

  onDeleteClick(item: Item) {
    this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${item.name} item?`
      }
    });
  }

  onEditClick(item: Item) {
    this.dialog.open(EditItemComponent, {
      data: {
        item
      },
      title: 'Edit Item Details'
    });
  }

}
