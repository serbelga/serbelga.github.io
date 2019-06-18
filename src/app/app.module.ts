import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {
  MdcFabModule,
  MdcIconModule,
  MdcMenuModule,
  MdcIconButtonModule,
  MdcButtonModule,
  MdcTypographyModule,
  MdcTopAppBarModule,
  MdcTabModule,
  MdcTabScrollerModule,
  MdcTabBarModule,
  MdcTabIndicatorModule,
  MdcCardModule
} from '@angular-mdc/web';
import { AboutComponent } from './about/about.component';
import { PostsComponent } from './posts/posts.component';
import { ProjectsComponent } from './projects/projects.component';
import {Routes, RouterModule} from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'projects', component: ProjectsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PostsComponent,
    ProjectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MdcFabModule,
    MdcIconModule,
    MdcMenuModule,
    MdcIconButtonModule,
    MdcButtonModule,
    MdcTypographyModule,
    MdcTopAppBarModule,
    MdcTabModule,
    MdcTabScrollerModule,
    MdcTabBarModule,
    MdcTabIndicatorModule,
    MdcCardModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
