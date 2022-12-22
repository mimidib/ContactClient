import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-createpost',
  templateUrl: './createpost.component.html',
  styleUrls: ['./createpost.component.css'],
})
export class CreatepostComponent {
  constructor(private service: PostService, private router: Router) {}

  ngOnInit() {}

  createPost(title: string, body: string) {
    let post: post = {
      id: 0,
      userId: 0,
      title: title,
      body: body,
    };
    this.service.createPost(post).subscribe((res) => {
      console.log(res); //log the response post obj (managed Post) not the one we submit
      alert('Successfully Created Post');
    });
  }
}
