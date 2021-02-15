import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
import { NavigationComponent } from './_templates/navigation/navigation.component';
import { BlogPostComponent } from './_templates/blog-post/blog-post.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { BlogPostCommentComponent } from './_templates/blog-post-comment/blog-post-comment.component';
import { BlogPostCommentFormComponent } from './forms/blog-post-comment-form/blog-post-comment-form.component';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from './_templates/sidebar/sidebar.component';
import { NewBlogPostPageComponent } from './new-blog-post-page/new-blog-post-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavigationComponent,
    BlogPostComponent,
    BlogPostPageComponent,
    BlogPostCommentComponent,
    BlogPostCommentFormComponent,
    SidebarComponent,
    NewBlogPostPageComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
