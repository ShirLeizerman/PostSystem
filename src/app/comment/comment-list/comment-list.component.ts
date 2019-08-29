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

    @Input() commentList: Observable<Comment>;
    @Output() newComment: EventEmitter<Comment> = new EventEmitter<Comment>();

    constructor() { }

    public log(value) {
        console.log('**** CommentListComponent **** ', value);
    }
}
