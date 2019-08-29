import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentListContainerComponent } from './comment-list-container/comment-list-container.component';
import { CommentListComponent } from './comment-list/comment-list.component';
import { CommentContainerComponent } from './comment-container/comment-container.component';
import { CommentRoutingModule } from './comment-routing.module';
import { MaterialModule } from './material-module.module';
import { CommentTemplateComponent } from './comment-template/comment-template.component';
import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        CommentRoutingModule,
        MaterialModule
    ],
    exports: [
        CommentListContainerComponent,
    ],
    declarations: [
        CommentListContainerComponent,
        CommentListComponent,
        CommentContainerComponent,
        CommentTemplateComponent
    ]
  })
  export class CommentModule {}
