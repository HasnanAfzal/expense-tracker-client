import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ConfirmDialogService } from 'src/app/dialog/confirm-dialog/confirm-dialog.service';
import { DialogService } from 'src/app/dialog/dialog.service';
import { Category } from 'src/app/models/category.type';
import { EditCategoryComponent } from './dialog/edit-category/edit-category.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  categories!: Array<Category>;

  createCategoryForm = new FormGroup({
    'name': new FormControl(null, Validators.required)
  });

  constructor(private confirmDialog: ConfirmDialogService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.categories = [{
      _id: '1',
      name: 'Fruits'
    },
    {
      _id: '2',
      name: 'Nuts'
    },
    {
      _id: '3',
      name: 'Seeds'
    },
    {
      _id: '4',
      name: 'Sea Food'
    },
    {
      _id: '5',
      name: 'Groceries'
    }];
  }

  onSubmit(): void {

  }

  onDeleteClick(category: Category) {
    this.confirmDialog.open({
      data: {
        message: `Are you sure, you want to delete ${category.name} category?`
      }
    });
  }

  onEditClick(category: Category) {
    this.dialog.open(EditCategoryComponent, {
      title: 'Edit Category Details',
      data: {
        category
      }
    });
  }

}
