import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentListContainerComponent } from './comment-list-container/comment-list-container.component';


const routes: Routes = [
  { path: '', component: CommentListContainerComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CommentRoutingModule { }
