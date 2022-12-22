import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { post } from 'src/app/model/post';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css'],
})
export class PostComponent {
  id: number = 0;
  post: post = {
    userId: 0,
    id: 0,
    title: '',
    body: '',
  };

  constructor(
    private route: ActivatedRoute,
    private service: PostService,
    private rt: Router
  ) {}
  ngOnInit(): void {
    //anything that returns an observable needs a subscriber
    //activated route stores the params from html for us to use here
    //anythign that returns an observable needs a subscriber
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    //next we will call getPost(id) to retrieve the post for this component
    this.service.getPost(this.id).subscribe((res) => {
      // response is a post and we assign it to our post var
      this.post = res;
    });
  }

  //like postcontroller, we have CRUD methods to call service methods

  deletePost() {
    this.service.deletePost(this.id).subscribe((res) => {
      //alerts it was deleted and sends us back to list of posts page
      alert('deleted');
      this.rt.navigate(['/posts']);
    });
  }

  updatePost(title: string, body: string) {
    this.post.id = this.id;
    this.post.title = title;
    this.post.body = body;

    this.service.updatePost(this.post).subscribe((res) => {
      alert('updated');
      this.rt.navigate(['/posts']);
    });
  }

  // deletePost() {
  //   if (confirm('Are you sure you want to delete this post?')) {
  //     this.service.deletePost(this.id).subscribe((res) => {
  //       this.router.navigate(['/posts']);
  //     });
  //   }
  //   // alert('Are you sure you want to delete?');
  //   // this.router.navigate(['posts']);
  // }
}
