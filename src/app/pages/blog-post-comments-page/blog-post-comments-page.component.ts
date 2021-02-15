import { Component, OnInit } from '@angular/core';
import { BlogPostComment } from 'src/app/interfaces/blog-post-comment';
import { BlogPostCommentService } from 'src/app/services/blog-post-comment.service';

@Component({
  selector: 'app-blog-post-comments-page',
  templateUrl: './blog-post-comments-page.component.html',
  styleUrls: ['./blog-post-comments-page.component.sass']
})
export class BlogPostCommentsPageComponent implements OnInit {
  comments: BlogPostComment[];

  constructor(private blogPostCommentService: BlogPostCommentService) { }

  ngOnInit(): void {
    this.getBlogPostComments();
  }

  getBlogPostComments(): void {
    this.comments = this.blogPostCommentService.getAllWithBlogPosts();
  }
}
