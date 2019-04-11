import { Component } from "@angular/core";

//rj for Recipe Journal
@Component({
  selector: 'rj-root',
  template: `
  <nav class='navbar navbar-expand navbar-light bg-light'>
    <a class='navbar-brand'>{{pageTitle}}</a>  
      <ul class='nav nav-pills'>
        <li><a class='nav-link' [routerLink]="['/welcome']">Home</a></li>
        <li><a class='nav-link' [routerLink]="['/recipes']">Recipe List</a></li>
      </ul>
  </nav>
  <div class = "container">
    <router-outlet></router-outlet>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = "Derek's Cookbook Recipes";
}

