import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <div class="header-bar"></div>
    <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>

      <a routerLink="/movies" routerLinkActive="active">Movies</a>
      <a routerLink="/music" routerLinkActive="active">Music</a>
      <a routerLink="/books" routerLinkActive="active">Books</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = 'My Media Library';
}
