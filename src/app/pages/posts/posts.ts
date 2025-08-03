import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostsResourses } from '@pages/posts/services/posts-resourses';

@Component({
  selector: 'app-posts',
  imports: [
    CommonModule
  ],
  templateUrl: './posts.html',
  styleUrl: './posts.scss'
})
export class Posts {
  private readonly postsResourses = inject(PostsResourses);

  public postsLoaded$ = this.postsResourses.getPosts()
}
