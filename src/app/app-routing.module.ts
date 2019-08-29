import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'comment' },
  {
    path: 'comment',
    loadChildren: () => import('./comment/comment.module').then(m => m.CommentModule)
    //     loadChildren: () => import('./comment/comment-routing.module').then(m => m.CommentRoutingModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
