import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.scss']
})
export class DesignComponent implements OnInit {
  designs: any;
  designsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/design.json';
  constructor(private sanitizer: DomSanitizer, private http: HttpClient) { }
  ngOnInit() {
    this.http.get(this.designsUrl).subscribe(
      data => {
        console.log(data);
        this.designs = data;
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