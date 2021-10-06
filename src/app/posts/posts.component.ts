import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  { 


  posts:any[]= [];

   constructor(private http: HttpClient) { 

   }

  ngOnInit() {
    this.loadPosts();

 }

  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: any) => {
    this.posts = posts;
  });
  }

}
