import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
  })
  export class PostsService {
    protected basePath = 'https://jsonplaceholder.typicode.com';
    // ...
  }