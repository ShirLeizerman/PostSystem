import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from './comment.model';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CommentService {
  // private servicePath = 'https://localhost:44379/api/art';
  private commentList: Comment[];
  private commentListJson = [{
      id: '1',
      title: 'first msg',
      text: 'first massage text',
      tags: ['firstTag1', 'firstTag2', 'firstTag3']
    },
    {
      id: '2',
      title: 'second msg',
      text: 'second massage text',
      tags: ['secondTag1', 'secondTag2', 'secondTag3']
    },
    {
      id: '3',
      title: 'third msg',
      text: 'third massage <div> text in div </div> text',
      tags: ['thirdTag1', 'thirdTag2', 'thirdTag3']
    },
    {
      id: '4',
      title: 'fourth msg',
      text: 'fourth massage text',
      tags: ['fourthTag1', 'fourthTag2', 'fourthTag3']
    }
  ];

  constructor(private http: HttpClient) {
    this.commentList = this.commentListJson.map(comment => new Comment(comment.id, comment.title, comment.text, comment.tags, null));
  }

  public getCommentList() {
    return of(this.commentList.sort((a, b) => a.creationTime.getTime() - b.creationTime.getTime()));
  }

  private getRandomId() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    // return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
    //     (c ^ crypto.getRandomValues(new  Uint8Array(1))[0] & 15 >> c / 4).toString(16));
  }

  public addNewComment(comment: Comment) {
    comment.id = this.getRandomId();
    this.commentList = [...this.commentList, comment];

    return this.getCommentList();
  }

  public updateComment(comment: Comment) {
    const existComments = this.commentList.filter(existComment => existComment.id !== comment.id);
    if (this.commentList.length - existComments.length !== 1) {
      // error
    } else {
      this.commentList = [...existComments, comment];
    }

    return this.getCommentList();
  }
}
