import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBlogPostPageComponent } from './new-blog-post-page.component';

describe('NewBlogPostPageComponent', () => {
  let component: NewBlogPostPageComponent;
  let fixture: ComponentFixture<NewBlogPostPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBlogPostPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBlogPostPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
