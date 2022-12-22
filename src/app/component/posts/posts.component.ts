import { Component } from '@angular/core';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
})
export class PostsComponent {
  posts: post[] = [];

  //provide service, activated route and router
  constructor(private service: PostService) {}

  ngOnInit() {
    //provide the post component with the api posts using getPosts,
    //subscribe and assign response
    this.service.getPosts().subscribe((res) => {
      this.posts = res;
    });
  }
}
