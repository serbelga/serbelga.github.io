import {Component, OnInit} from '@angular/core';

import {NavigationStart, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {filter} from 'rxjs/operators';
import {ThemeService} from './theme.service';
import {DomSanitizer} from '@angular/platform-browser';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  bioUrl = 'https://raw.githubusercontent.com/serbelga/serbelga.github.io/data/data/bio.json';
  bio: any;
  title = 'serbelga-website';
  tabs = [
    {label: 'Posts', router: 'posts'},
    {label: 'Projects', router: 'projects'},
    {label: 'Design', router: 'design'},
    {label: 'About', router: 'about'}
  ];
  navStart: Observable<NavigationStart>;
  themeService: ThemeService;

  constructor(private router: Router, private sanitizer: DomSanitizer, private http: HttpClient) {
    this.themeService = new ThemeService();
    this.navStart = router.events.pipe(
      filter(evt => evt instanceof NavigationStart)
    ) as Observable<NavigationStart>;
  }

  ngOnInit() {
    this.http.get(this.bioUrl).subscribe(
      data => {
        console.log(data);
        this.bio = data;
      }
    );
    const drawer = document.getElementsByTagName('mwc-drawer')[0];
    const tabBar = document.getElementsByTagName('mwc-tab-bar')[0];
    const drawerList = document.getElementsByTagName('mwc-list')[0];

    if (drawer) {
      const container = drawer.parentNode;
      container.addEventListener('MDCTopAppBar:nav', () => {
        drawer.open = !drawer.open;
      });
    }

    this.navStart.subscribe(evt => {
      switch (evt.url) {
        case '/#' :
          tabBar.activeIndex = 0;
          drawerList.select(0);
          break;
        case '/' :
          tabBar.activeIndex = 0;
          drawerList.select(0);
          break;
        case '/posts' :
          tabBar.activeIndex = 0;
          drawerList.select(0);
          break;
        case '/projects' :
          tabBar.activeIndex = 1;
          drawerList.select(1);
          break;
        case '/design' :
          tabBar.activeIndex = 2;
          drawerList.select(2);
          break;
        case '/about' :
          tabBar.activeIndex = 3;
          drawerList.select(3);
          break;
      }
    });
  }

  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}
