import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog-post';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {

  blog_posts: BlogPost[];

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.blog_posts = this.blogPostService.getAll();
  }

}
