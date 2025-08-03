import { Routes } from '@angular/router';
import { Albums } from '@pages/albums/albums';
import { Home } from '@pages/home/home';
import { Posts } from '@pages/posts/posts';
import { Users } from '@pages/users/users';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'posts', component: Posts },
  { path: 'albums', component: Albums },
  { path: 'users', component: Users }
];
