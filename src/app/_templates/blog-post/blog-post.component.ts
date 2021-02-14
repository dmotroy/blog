import { Component, OnInit, Input } from '@angular/core';
import { BlogPost } from 'src/app/interfaces/blog-post';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.sass']
})
export class BlogPostComponent implements OnInit {
  @Input() blog_post: BlogPost;

  constructor() { }

  ngOnInit(): void {
  }

}
