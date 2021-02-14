import { Injectable } from '@angular/core';
import { BlogPostComment } from '../interfaces/blog-post-comment';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostCommentService extends MainService {
  objects: BlogPostComment[] = [
    { id: 1, blog_post_id: 1, name: 'Max Mustermann', comment: 'Richtig guter Beitrag!', created_at: '2020-07-08' },
    { id: 2, blog_post_id: 5, name: 'Max Mustermann', comment: 'Richtig guter Beitrag, weiter so!', created_at: '2020-08-15' },
    { id: 3, blog_post_id: 5, name: 'Albert Einstein', comment: 'Selbst ich wusste es nicht!', created_at: '2020-08-15' },
    { id: 4, blog_post_id: 5, name: 'Nicola Tesla', comment: 'Sehr große Spannung während des Lesens! Richtig gut!', created_at: '2020-08-15' },
  ];

  constructor() { 
    super();
  }

  getAllByBlogPostId(id: number): BlogPostComment[] {
    return this.objects.filter((i) => i.blog_post_id === id);
  }
}
