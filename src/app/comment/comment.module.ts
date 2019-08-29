import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListContainerComponent } from './comment-list-container/comment-list-container.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentRoutingModule } from './comment-routing.module';
import { MaterialModule } from './material-module.module';
import { CommentTemplateComponent } from './comment-template/comment-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterStringComponent } from './filter-string/filter-string.component';
import { ChipsAutocompleteComponent } from './chips-autocomplete/chips-autocomplete.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommentRoutingModule,
        MaterialModule,
        NgbModule
    ],
    exports: [
        CommentListContainerComponent,
    ],
    declarations: [
        CommentListContainerComponent,
        CommentListComponent,
        CommentContainerComponent,
        CommentTemplateComponent,
        FilterStringComponent,
        ChipsAutocompleteComponent
    ]
  })
  export class CommentModule {}
