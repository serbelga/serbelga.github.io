import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css', '../common/common.css']
})
export class ProjectsComponent implements OnInit {
  projects: any;
  projectsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/projects.json';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.projectsUrl).subscribe(
      data => {
        console.log(data);
        this.projects = data;
      }
    );
  }

  notEmpty(field: string): boolean {
    return field !== '';
  }
}
