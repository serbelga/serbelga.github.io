import { Component, OnInit } from '@angular/core';
import posts from 'src/data/posts.json';
import bio from '../../data/bio.json';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts = posts;
  constructor() { }

  ngOnInit() {
  }
}