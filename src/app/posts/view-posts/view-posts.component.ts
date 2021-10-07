import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-view-posts',
  templateUrl: './view-posts.component.html',
  styleUrls: ['./view-posts.component.css']
})
export class ViewPostsComponent implements OnInit {

  posts:any[]= [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.loadPosts();
  }

  loadPosts(){
    this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((posts: any) => {
    this.posts = posts;
  });
  }

}
