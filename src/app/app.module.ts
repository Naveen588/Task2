import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsComponent } from './views/posts/posts.component';
import { PostService } from './providers/post.service';
import { TodoComponent } from './views/todo/todo.component';
import { TodoService } from './providers/todos.service';


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [PostService,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
