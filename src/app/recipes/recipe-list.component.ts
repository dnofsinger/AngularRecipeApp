import { Component, OnInit } from '@angular/core';
import { IRecipe } from './recipe'
import { RecipeService } from './recipe-service'

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
    recipes: IRecipe[] = [];

    constructor(private recipeService: RecipeService){
        
    }

    onRatingClicked(message: string): void{
        this.pageTitle = 'Recipe List: ' + message; 
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
        this.recipes = this.recipeService.getRecipes();
        this.filteredRecipes = this.recipes;
    }
}