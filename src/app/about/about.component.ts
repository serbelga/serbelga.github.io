import { Component, OnInit } from '@angular/core';
import bio from 'src/data/bio.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  bio = bio.description;
  constructor() { }

  ngOnInit() {
  }

}
