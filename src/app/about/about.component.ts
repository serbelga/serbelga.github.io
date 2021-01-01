import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  bioUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/bio.json';
  bio: any;

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }
  ngOnInit() {
    this.http.get(this.bioUrl).subscribe(
      data => {
        console.log(data);
        this.bio = data;
      }
    );
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
