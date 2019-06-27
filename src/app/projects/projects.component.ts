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
