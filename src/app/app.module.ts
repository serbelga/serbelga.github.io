import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import '@material/mwc-button';
import '@material/mwc-drawer';
import '@material/mwc-fab';
import '@material/mwc-icon';
import '@material/mwc-icon-button';
import '@material/mwc-icon-button-toggle';
import '@material/mwc-menu';
import '@material/mwc-switch';
import '@material/mwc-tab-bar';
import '@material/mwc-tab';
import '@material/mwc-list';
import '@material/mwc-top-app-bar-fixed';
import { PostsComponent } from './posts/posts.component';
import { ProjectsComponent } from './projects/projects.component';
import { Routes, RouterModule } from '@angular/router';
import { DesignComponent } from './design/design.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  { path: '', component: PostsComponent },
  { path: 'about', component: AboutComponent },
  { path: 'posts', component: PostsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'design', component: DesignComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    ProjectsComponent,
    DesignComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { useHash : true }
    )
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
