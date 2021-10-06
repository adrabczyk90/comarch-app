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
  }

  createPost(){
    this.http.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'This is post title',
      body: 'This is post body'
    }).subscribe((response: any) => {
        alert(JSON.stringify(response));
  }, 
  (error)=> {alert(JSON.stringify(error))});
  }

  deletePost(){
    this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
      .subscribe((response: any) => {
        alert(JSON.stringify(response));
  }, 
  (error)=> {alert(JSON.stringify(error))});
  }
}
