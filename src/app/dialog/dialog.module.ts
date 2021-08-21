import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogComponent } from './dialog.component';
import { InsertionDirective } from './insertion.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';


@NgModule({
  declarations: [
    DialogComponent,
    InsertionDirective,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    MaterialModule,
    MaterialModule
  ]
})
export class DialogModule { }
