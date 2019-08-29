import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment.model';

@Component({
    selector: 'ps-comment-list',
    templateUrl: './comment-list.component.html',
    styleUrls: ['./comment-list.component.less'],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class  CommentListComponent {

    @Input() commentListTags: string[];
    @Input() commentList: Observable<Comment>;
    @Output() newComment: EventEmitter<Comment> = new EventEmitter<Comment>();
    @Output() updatedComment: EventEmitter<Comment> = new EventEmitter<Comment>();

    public newCommentToAdd = this.getNewComment();

    constructor() { }

    public getNewComment() {
        return new Comment('', '', '', [], null);
    }

    public onNewComment($event) {
        this.newComment.emit($event);
        this.newCommentToAdd = this.getNewComment();
    }
}
