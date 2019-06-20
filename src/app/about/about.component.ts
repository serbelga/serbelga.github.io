import { Component, OnInit } from '@angular/core';
import bio from 'src/data/bio.json';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  name = bio.name;
  bio = bio.description;
  constructor() { }

  ngOnInit() {
  }

}
