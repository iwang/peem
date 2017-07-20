import { Component } from '@angular/core';


@Component({
  selector: 'my-app',
  styleUrls: ['./app.component.css'],
  template: `
  <h1>{{title}}</h1>
  <nav>
    <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    <a routerLink="/glist">List</a>
  <nav>
  <quick-search></quick-search>
  <router-outlet></router-outlet>
  `
})

export class AppComponent {
  title = 'Tour of Heroes';
}