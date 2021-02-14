import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService extends MainService {
  description: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';

  objects: BlogPost[] = [
    { id: 5, title: 'Mein fünter Beitrag', description: this.description, created_at: '2020-08-15' },
    { id: 4, title: 'Mein vierter Beitrag', description: this.description, created_at: '2020-08-14' },
    { id: 3, title: 'Mein dritter Beitrag', description: this.description, created_at: '2020-08-12' },
    { id: 2, title: 'Mein zweiter Beitrag', description: this.description, created_at: '2020-08-10' },
    { id: 1, title: 'Mein erster Beitrag', description: this.description, created_at: '2020-07-08' },
  ];

  constructor() { 
    super();
  }
}
