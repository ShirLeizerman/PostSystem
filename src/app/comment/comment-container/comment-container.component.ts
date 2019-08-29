import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Comment } from '../comment.model';

@Component({
    selector: 'ps-comment-container',
    templateUrl: './comment-container.component.html',
    styleUrls: ['./comment-container.component.less']
})

export class  CommentContainerComponent {

    // tslint:disable-next-line: variable-name
    private _comment: Comment;
    @Input() get comment() {
        return this._comment;
    }
    set comment(value: Comment) {
        console.log('**** CommentContainerComponent - comment ****', value);
        this._comment = value;
    }
    @Input() editMode = false;

    @Output() newComment: EventEmitter<Comment> = new EventEmitter<Comment>();

    public tempComment: Comment;

    constructor() { }

    public enableEdit() {
        this.editMode = true;
        this.tempComment = new Comment(this.comment.id, this.comment.title, this.comment.text, this.comment.tags);
    }

    public cancelEdit() {
        this.editMode = false;
    }

    public saveComment() {
        this.editMode = false;
        this.newComment.emit(this.tempComment);
    }
}
