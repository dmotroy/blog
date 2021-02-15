import { Component, OnInit, Input } from '@angular/core';
import { BlogPostComment } from 'src/app/interfaces/blog-post-comment';

@Component({
  selector: 'app-blog-post-comment',
  templateUrl: './blog-post-comment.component.html',
  styleUrls: ['./blog-post-comment.component.sass']
})
export class BlogPostCommentComponent implements OnInit {
  @Input() comment: BlogPostComment;

  constructor() { }

  ngOnInit(): void {
  }

}
