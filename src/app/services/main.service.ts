import { Injectable } from '@angular/core';
import { BlogPost } from '../interfaces/blog-post';
import { BlogPostComment } from '../interfaces/blog-post-comment';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  objects: BlogPost[] | BlogPostComment[];

  constructor() {}

  getAll(): any {
    return this.objects;
  }

  findById(id: number): any {
    // return this.objects.find((i) => i.id === id);

    var object = undefined;

    this.objects.forEach(function (value) {
      if(value.id == id) {
        object = value;
      }
    });

    return object;
  }

  createOrUpdate(object: any) {
    if (this.findById(object.id)) {
      this.update(object);
    } else {
      this.create(object);
    }
  }

  update(object: any) {
    this.objects[this.objects.indexOf(this.findById(object.id))] = object;
  }

  create(object: any) {
    object.id = this.objects[this.objects.length - 1].id + 1;
    this.objects.push(object);
  }
}
