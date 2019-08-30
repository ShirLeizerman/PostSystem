import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material-module.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterStringComponent } from './filter-string/filter-string.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MaterialModule,
        NgbModule
    ],
    exports: [
        ReactiveFormsModule,
        MaterialModule,
        FilterStringComponent,
        ChipsAutocompleteComponent
    ],
    declarations: [
        FilterStringComponent,
        ChipsAutocompleteComponent
    ]
  })
  export class SharedModule {}
