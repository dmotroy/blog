import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog-post';
import { BlogPostComment } from 'src/app/interfaces/blog-post-comment';
import { BlogPostCommentService } from 'src/app/services/blog-post-comment.service';

@Component({
  selector: 'app-blog-post-comment-form',
  templateUrl: './blog-post-comment-form.component.html',
  styleUrls: ['./blog-post-comment-form.component.sass'],
})
export class BlogPostCommentFormComponent implements OnInit {
  @Input() blog_post: BlogPost;
  newComment: BlogPostComment;

  constructor(private blogPostCommentService: BlogPostCommentService) {}

  ngOnInit(): void {
    this.resetObject();
  }

  saveObject() {
    this.blogPostCommentService.createOrUpdate(this.newComment);
    this.resetObject();
    this.reloadBlogPostComments();
  }

  resetObject() {
    this.newComment = {
      id: 0,
      blog_post_id: this.blog_post.id,
      name: '',
      comment: '',
      created_at: new Date().toISOString().slice(0, 10),
    };
  }

  reloadBlogPostComments() {
    this.blog_post.comments = this.blogPostCommentService.getAllByBlogPostId(this.blog_post.id);
  }
}
