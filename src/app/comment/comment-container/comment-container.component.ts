import { Component, Input, EventEmitter, Output, ChangeDetectionStrategy } from '@angular/core';
import { Comment } from '../comment.model';
import { EvalExpressionService } from 'src/app/shared/eval-expression.service';

@Component({
    selector: 'ps-comment-container',
    templateUrl: './comment-container.component.html',
    styleUrls: ['./comment-container.component.less']
})

export class  CommentContainerComponent {

    @Input() commentListTags: string[];

    // tslint:disable-next-line: variable-name
    private _comment: Comment;
    @Input() get comment() {
        return this._comment;
    }
    set comment(value: Comment) {
        console.log('**** CommentContainerComponent - comment ****', value);
        this._comment = value;
        this.setTempComment();
    }

    // tslint:disable-next-line: variable-name
    _fixEditMode = false;
    @Input() get fixEditMode() {
        return this._fixEditMode;
    }
    set fixEditMode(value: boolean) {
        if (value) {
            this._fixEditMode = value;
            this.enableEdit();
        }
    }

    @Output() newComment: EventEmitter<Comment> = new EventEmitter<Comment>();

    public tempComment: Comment;

    // tslint:disable-next-line: variable-name
    _editMode = (this.fixEditMode) ? true : false;
    get editMode() {
        return this._editMode;
    }
    set editMode(value: boolean) {
        if (this.fixEditMode) {
            this._editMode = true;
        } else {
            this._editMode = value;
        }
    }

    constructor(public evalExpressionService: EvalExpressionService) { }

    public enableEdit() {
        this.editMode = true;
        this.setTempComment();
    }

    private setTempComment() {
        this.tempComment = new Comment(this.comment.id,
                                        this.comment.title,
                                        this.comment.text,
                                        this.comment.tags,
                                        this.comment.creationTime);
    }

    public cancelEdit() {
        this.editMode = false;
    }

    public saveComment() {
        this.editMode = false;
        this.newComment.emit(this.tempComment);
    }
}
