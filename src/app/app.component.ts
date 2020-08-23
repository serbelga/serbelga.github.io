import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import bio from 'src/data/bio.json';

import {MdcList, MdcTabActivatedEvent, MdcTabBar} from '@angular-mdc/web';

import { NavigationStart, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild('mdcTabBar', {static: false}) mdcTabBar: MdcTabBar;
  @ViewChild('mdcList', {static: false}) mdcList: MdcList;
  title = 'sergiobelda-me-app';
  contact = bio.contact;
  tabs = [
    { label: 'Posts', router: 'posts' },
    { label: 'Projects', router: 'projects' },
    { label: 'Design', router:  'design' },
    { label: 'About', router:  'about' }
  ];

  navStart: Observable<NavigationStart>;

  constructor(private router: Router) {
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.navStart.subscribe(evt => {
      switch (evt.url) {
        case '/#' : this.mdcTabBar.activeTabIndex = 0; this.mdcList.setSelectedIndex(0) ; break;
        case '/' : this.mdcTabBar.activeTabIndex = 0 ; this.mdcList.setSelectedIndex(0) ; break;
        case '/posts' : this.mdcTabBar.activeTabIndex = 0 ; this.mdcList.setSelectedIndex(0) ; break;
        case '/projects' : this.mdcTabBar.activeTabIndex = 1 ; this.mdcList.setSelectedIndex(1) ; break;
        case '/design' : this.mdcTabBar.activeTabIndex = 2 ; this.mdcList.setSelectedIndex(2) ; break;
        case '/about' : this.mdcTabBar.activeTabIndex = 2 ; this.mdcList.setSelectedIndex(3) ; break;
      }
    });
  }
}
