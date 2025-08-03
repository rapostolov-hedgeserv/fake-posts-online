import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { PostsResourses } from '@pages/posts/services/posts-resourses';

export const postsResolver: ResolveFn<unknown> = (route, state) => {
  const postResources = inject(PostsResourses);

  return postResources.getPosts();
};
