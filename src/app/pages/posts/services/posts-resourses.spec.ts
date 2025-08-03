import { TestBed } from '@angular/core/testing';

import { PostsResourses } from './posts-resourses';

describe('PostsResourses', () => {
  let service: PostsResourses;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PostsResourses);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
