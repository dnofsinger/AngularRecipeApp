import {Component} from '@angular/core';

@Component({
    selector: 'rj-recipes',
    templateUrl: './recipe-list.component.html'
})

export class RecipeListComponent{
    pageTitle: string = 'Recipe List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'recipe';
    recipes: any[] = [
        {
            "recipeId": 1,
            "recipeName": "Spaghetti and Meatballs",
            "recipeTimePrepMin": 45,
            "recipeLastTried": "April 6th, 2019",
            "description": "Old family recipe for Spaghetti and Meatballs",
            "ingredients": "",
            "difficulty": 2.0,
            "starRating": 4.0,
            "calories" : 500,
            "imageUrl": "https://openclipart.org/download/8673/johnny-automatic-spaghetti-and-meatballs.svg"
        },
        {
            "recipeId": 2,
            "recipeName": "Fried Rice",
            "recipeTimePrepMin": 60,
            "recipeLastTried": "March 15th, 2019",
            "description": "Restaurant Fried Rice",
            "ingredients": "",
            "difficulty": 2.5,
            "starRating": 3.5,
            "calories" : 500,
            "imageUrl": "https://openclipart.org/download/283405/Japanese-Rice-Bowl---Monochrome.svg"
        }
    ];

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}