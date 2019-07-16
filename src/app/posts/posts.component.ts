import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts: any;
  postsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/posts.json';
  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get(this.postsUrl).subscribe(
      data => {
        console.log(data);
        this.posts = data;
      }
    );
  }
}
