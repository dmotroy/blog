import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogPostCommentsPageComponent } from './pages/blog-post-comments-page/blog-post-comments-page.component';
import { BlogPostPageComponent } from './pages/blog-post-page/blog-post-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NewBlogPostPageComponent } from './pages/new-blog-post-page/new-blog-post-page.component';

const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'blog/new', component: NewBlogPostPageComponent },
  { path: 'blog/:id', component: BlogPostPageComponent },
  { path: 'comments', component: BlogPostCommentsPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
