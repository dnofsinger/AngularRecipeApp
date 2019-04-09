import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe'

@Component({
    selector: 'rj-recipes',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})

export class RecipeListComponent implements OnInit {
    pageTitle: string = 'Recipe List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;

    _listFilter: string = 'recipe';
    get listFilter(): string {
        return this._listFilter;
    }

    set listFilter(value: string) {
        this._listFilter = value;
        this.filteredRecipes = this.listFilter ? this.performFilter(this.listFilter) : this.recipes;
    }


    filteredRecipes: IRecipe[];
    recipes: IRecipe[] = [
        {
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
        },
        {
            'recipeId': 2,
            'recipeName': 'Fried Rice',
            'recipeTimePrepMin': 60,
            'recipeLastTried': 'March 15th, 2019',
            'description': 'Restaurant Fried Rice',
            'ingredients': '',
            'difficulty': 2.5,
            'starRating': 4.5,
            'calories': 500,
            'imageUrl': 'https://openclipart.org/download/283405/Japanese-Rice-Bowl---Monochrome.svg'
        }
    ];

    constructor(){
        this.filteredRecipes = this.recipes;
        this.listFilter = '';
    }

    performFilter(filterBy: string): IRecipe[] {
        filterBy = filterBy.toLocaleLowerCase();
        return this.recipes.filter((recipe: IRecipe) =>
            recipe.recipeName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(): void {
        this.showImage = !this.showImage;
    }

    ngOnInit(): void {
        console.log('In OnInit()...');
    }
}