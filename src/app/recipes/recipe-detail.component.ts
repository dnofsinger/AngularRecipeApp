import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IRecipe } from './recipe';

@Component({
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  pageTitle: string = 'Recipe Detail';
  recipe: IRecipe;

  constructor(private route: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    let id = +this.route.snapshot.paramMap.get('id');
    this.pageTitle += `: ${id}`;
    this.recipe = {
      'recipeId': 1,
      'recipeName': 'Spaghetti and Meatballs',
      'recipeTimePrepMin': 45,
      'recipeLastTried': 'April 6th, 2019',
      'description': 'Old family recipe for Spaghetti and Meatballs',
      'ingredients': '',
      'difficulty': 2.0,
      'starRating': 4.0,
      'calories': 500,
      'imageUrl': 'https://openclipart.org/download/8673/johnny-automatic-spaghetti-and-meatballs.svg'
    }
  }

  onBack(): void{
    this.router.navigate(['/products']);
  }
}
