import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { BlogPost } from 'src/app/interfaces/blog-post';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'app-blog-post-page',
  templateUrl: './blog-post-page.component.html',
  styleUrls: ['./blog-post-page.component.sass']
})
export class BlogPostPageComponent implements OnInit {

  blog_post: BlogPost;

  constructor(
    private route: ActivatedRoute, 
    private blogPostService: BlogPostService,
    private location: Location  
  ) { }

  ngOnInit(): void {
    this.getBlogPost();
  }

  goBack(): void {
    this.location.back();
  }

  getBlogPost(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.blog_post = this.blogPostService.findById(id);
  }
}
