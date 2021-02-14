import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';
import { MainService } from './main.service';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService extends MainService {
  description: string = 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate';

  objects: BlogPost[] = [
    { id: 1, title: 'Mein erster Beitrag', description: this.description, created_at: '2020-07-08' },
    { id: 2, title: 'Mein zweiter Beitrag', description: this.description, created_at: '2020-08-10' },
    { id: 3, title: 'Mein dritter Beitrag', description: this.description, created_at: '2020-08-12' },
    { id: 4, title: 'Mein vierter Beitrag', description: this.description, created_at: '2020-08-14' },
    { id: 5, title: 'Mein fünter Beitrag', description: this.description, created_at: '2020-08-15' },
    { id: 6, title: 'Mein sechster Beitrag', description: this.description, created_at: '2020-08-17' },
    { id: 7, title: 'Mein siebter Beitrag', description: this.description, created_at: '2020-08-18' },
    { id: 8, title: 'Mein achter Beitrag', description: this.description, created_at: '2020-08-19' },
    { id: 9, title: 'Mein neunter Beitrag', description: this.description, created_at: '2020-08-24' },
    { id: 10, title: 'Mein zehnter Beitrag', description: this.description, created_at: '2020-08-25' },
    { id: 11, title: 'Mein elfter Beitrag', description: this.description, created_at: '2020-08-27' },
  ];

  constructor() { 
    super();
  }
}
