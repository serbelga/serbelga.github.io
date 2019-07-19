import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  projectsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/projects.json';
  slides = [
    {img: 'http://placehold.it/350x150/000000'},
    {img: 'http://placehold.it/350x150/111111'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/333333'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'},
    {img: 'http://placehold.it/350x150/666666'}
  ];
  slideConfig = {slidesToShow: 4, slidesToScroll: 4};
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }
  ngOnInit() {
    this.http.get(this.projectsUrl).subscribe(
      data => {
        console.log(data);
        this.projects = data;
      }
    );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  notEmpty(field) {
    return field !== '';
  }
}
