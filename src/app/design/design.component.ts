import {Component, OnInit} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  designs: any;
  designsUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/design.json';

  constructor(private sanitizer: DomSanitizer, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.http.get(this.designsUrl).subscribe(
      data => {
        console.log(data);
        this.designs = data;
      }
    );
  }
}
