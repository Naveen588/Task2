import { Component, OnInit } from '@angular/core';
import { Posts } from 'src/app/providers/post';
import { PostService } from 'src/app/providers/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  data: any = [];

  constructor(private _postService: PostService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._postService.getPostData().subscribe((res) => {
      if (res) {
        let result = res;
        this.data = result;

        this.data.forEach((post: any) => {
          if (post.body?.length >= 150) {
            post.body = post.body.slice(0, 149) + '...';
          }
          if (post.title?.length >= 150) {
            post.title = post.title.slice(0, 149) + '...';
          }
        });
      }
    });
    //

    // if(this.data.body)
  }
}
