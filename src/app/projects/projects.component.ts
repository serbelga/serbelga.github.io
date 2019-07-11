import { Component, OnInit } from '@angular/core';
import projects from 'src/data/projects.json';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = projects;
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
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
  notEmpty(field) {
    return field !== '';
  }
  ngOnInit() {
  }
}
