import { Component, OnInit } from '@angular/core';

import { IRecipe } from './recipe';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  pageTitle: string = 'Recipe Detail';
  recipe: IRecipe;

  constructor() { }

  ngOnInit() {
  }

}
