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
    public commentListFiltered: Comment[] = [];
    public commentListTags: string[] = [];
    private TagFilter: string[] = [];

    constructor(private commentService: CommentService) { }

    ngOnInit() {
        this.commentService.getCommentList()
          .subscribe((updateCommentList: Comment[]) => {
            this.setComponentDataByUpdatedCommentList(updateCommentList);
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
        this.commentListFiltered = this.getFilteredCommentList(this.commentList, this.TagFilter);
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

    public newFilterSelection($event) {
        this.TagFilter = $event.value;
        this.commentListFiltered = this.getFilteredCommentList(this.commentList, this.TagFilter);
    }

    private getFilteredCommentList(commentList: Comment[], filterTagList: string[]): Comment[] {
        if (filterTagList.length === 0) {
            return commentList;
        }

        const tagSet = new Set(filterTagList);
        return commentList.filter(comment => comment.tags.filter(tag => tagSet.has(tag)).length > 0);
    }
}
