import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './views/posts/posts.component';
import { TodoComponent } from './views/todo/todo.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'/todo',
    pathMatch:'full'
  },
  {
    path:'todo',
    component:TodoComponent
  },
  {
    path:'posts',
    component:PostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
