import { Component, OnInit } from '@angular/core';

import { Comment } from '../comment.model';
import { CommentService } from 'src/app/comment/comment.service';

@Component({
    selector: 'ps-comment-list-container',
    templateUrl: './comment-list-container.component.html',
    styleUrls: ['./comment-list-container.component.less']
})

export class  CommentListContainerComponent implements OnInit {

    public commentList: Comment[] = [];
    public commentListTags: string[] = [];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getCommentList()
          .subscribe((data: any) => {
              this.commentList = data;
        });
    }

    public addNewComment(comment: Comment) {
        this.commentService.addNewComment(comment)
            .subscribe((updateCommentList: Comment[]) => {
                this.setComponentDataByUpdatedCommentList(updateCommentList);
      });
    }

    public updateComment(comment: Comment) {
        this.commentService.updateComment(comment)
            .subscribe((updateCommentList: Comment[]) => {
                this.setComponentDataByUpdatedCommentList(updateCommentList);
      });
    }

    private setComponentDataByUpdatedCommentList(updateCommentList) {
        this.commentList = updateCommentList;
        this.commentListTags = this.getTagFromList(this.commentList);
    }

    private getTagFromComment(comment: Comment): string[] {
        return comment.tags;
    }

    private getTagFromList(commentList: Comment[]): string[] {
        const tagList = new Set<string>();
        let commentTagList: string[];
        commentList.forEach(comment => {
            commentTagList = this.getTagFromComment(comment);
            commentTagList.forEach(commentTag => tagList.add(commentTag));
        });
        return [...tagList];
    }
}
