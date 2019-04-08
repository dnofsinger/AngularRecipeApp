import { Component } from "@angular/core";

//rj for Recipe Journal
@Component({
  selector: 'rj-root',
  template: `
  <div><h1>{{pageTitle}}</h1>
    <rj-recipes></rj-recipes>
  </div>
  `
})

export class AppComponent{
  pageTitle: string = "Derek's Cookbook Recipes";
}
