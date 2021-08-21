import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRippleModule } from '@angular/material/core';
import {MatAutocompleteModule} from '@angular/material/autocomplete';

@NgModule({
  exports: [
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatRippleModule,
    MatAutocompleteModule
  ]
})
export class MaterialModule {}