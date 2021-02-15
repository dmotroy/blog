import { Component, OnInit } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog-post';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-new-blog-post-page',
  templateUrl: './new-blog-post-page.component.html',
  styleUrls: ['./new-blog-post-page.component.sass']
})
export class NewBlogPostPageComponent implements OnInit {
  newBlogPost: BlogPost;

  constructor(private blogPostService: BlogPostService) { }

  ngOnInit(): void {
    this.resetObject();
  }

  saveObject() {
    this.blogPostService.createOrUpdate(this.newBlogPost);
    this.resetObject();
  }

  resetObject() {
    this.newBlogPost = {
      id: 0,
      title: '',
      description: '',
      created_at: new Date().toISOString().slice(0, 10),
    };
  }
}
