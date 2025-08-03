import { httpResource } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from 'inspector';

@Injectable()
export class PostsResourses {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com';
  public constructor() { }

  public getPosts() {
    return httpResource<any[]>(() => ({
      url: `${this.baseUrl}/posts`,
      method: 'GET',
      reportProgress: true,
    }))
  }
}
