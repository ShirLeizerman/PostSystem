import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListContainerComponent } from './comment-list-container/comment-list-container.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentRoutingModule } from './comment-routing.module';
import { CommentTemplateComponent } from './comment-template/comment-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CommentRoutingModule,
        SharedModule,
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
    ]
  })
  export class CommentModule {}
