import { Component } from '@angular/core';
// @ts-ignore
import data from 'src/data/data.json';
// @ts-ignore
import bio from 'src/data/bio.json';

import { MdcTabActivatedEvent } from '@angular-mdc/web';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sergiobelda-me-app';
  word = data.item;
  contact = bio.contact;
  tabs = [
    { label: 'Posts', router: 'posts' },
    { label: 'Projects', router: 'projects' },
    { label: 'About', router:  'about' }
  ];
  /*
  logTab(event: MdcTabActivatedEvent): void {
    console.log(event.index);
  }
  */
}
