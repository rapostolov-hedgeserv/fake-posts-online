import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '@common-components/header/header';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('fake-posts-online');
}
