import { Component, EventEmitter, Output } from '@angular/core';
import { DialogService } from 'src/app/dialog/dialog.service';
import { AddFieldNameComponent } from './dialog/add-field-name/add-field-name.component';

@Component({
  selector: 'app-add-field',
  templateUrl: './add-field.component.html',
  styleUrls: ['./add-field.component.scss']
})
export class AddFieldComponent {

  constructor(private dialog: DialogService) { }

  @Output()
  newFieldCreated = new EventEmitter<string>()

  onAddFieldClick() {
    const dialog = this.dialog.open(AddFieldNameComponent, {
      title: 'Add Field Name'
    });

    dialog.afterClosed.subscribe((result: string) => {
      if (result && result.trim().length) {
        this.newFieldCreated.emit(result);
      }
    });

  }

}
