export interface IRecipe{
    recipeId: number;
    recipeName: string;
    recipeTimePrepMin: number;
    recipeLastTried: string;
    description: string;
    ingredients: string; //Might be an array later, but I'll use string for now...
    difficulty: number;
    starRating: number;
    calories : number;
    imageUrl: string;
}