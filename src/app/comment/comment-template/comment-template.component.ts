import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { Comment } from '../comment.model';

@Component({
    selector: 'ps-comment-template',
    templateUrl: './comment-template.component.html',
    styleUrls: ['./comment-template.component.less']
})

export class  CommentTemplateComponent {
    constructor() { }

    public log(value) {
        console.log('**** CommentListComponent **** ', value);
    }
}
