import { Component, OnInit } from '@angular/core';

import { Comment } from '../comment.model';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
    selector: 'ps-comment-list-container',
    templateUrl: './comment-list-container.component.html',
    styleUrls: ['./comment-list-container.component.less']
})

export class  CommentListContainerComponent implements OnInit {

    public commentList = [];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getCommentList()
          .subscribe((data: any) => {
              console.log('**** CommentListContainerComponent ****', data);
              this.commentList = data;
        });
    }

    public addNewComment(comment: Comment) {
        this.commentService.updateComment(comment);
    }
}
