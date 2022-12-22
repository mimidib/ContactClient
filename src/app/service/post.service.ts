import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { post } from '../model/post';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  //service is where all mapping methods reside, getPost PutPost deletePost etc
  url: string = 'https://jsonplaceholder.typicode.com/posts';

  constructor(private http: HttpClient) {}

  //get array of posts
  getPosts(): Observable<post[]> {
    //return the http req at this url that returns array of posts
    return this.http.get<post[]>(this.url);
  }

  createPost(post: post): Observable<post> {
    return this.http.post<post>(this.url, post);
  }

  getPost(id: number): Observable<post> {
    return this.http.get<post>(this.url + '/' + id);
  }

  deletePost(id: number) {
    return this.http.delete(this.url + '/' + id);
  }

  updatePost(post: post): Observable<post> {
    return this.http.put<post>(this.url + '/' + post.id, post);
    //needs the id in url and the post new details in the obj post
    //give the post details in post obj
    //return a post observ obj, feeding the url / post.id & new post for persist
  }
}
