import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlickModule } from 'ngx-slick';
import { HttpClientModule } from '@angular/common/http';
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
  MdcCardModule,
  MdcImageListModule,
  MdcDrawerModule,
  MdcListModule
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
    HttpClientModule,
    AppRoutingModule,
    MdcCardModule,
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
    MdcListModule,
    MdcImageListModule,
    MdcTabIndicatorModule,
    MdcCardModule,
    MdcDrawerModule,
    SlickModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
