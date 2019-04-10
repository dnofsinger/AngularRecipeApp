import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

import { IRecipe } from './recipe';

@Injectable({
    providedIn: 'root'
})
export class RecipeService{

    private recipeUrl = 'api/recipes/recipes.json';

    constructor(private http: HttpClient){}

    getRecipes(): Observable<IRecipe[]> {
        return this.http.get<IRecipe[]>(this.recipeUrl).pipe(
            tap(data => console.log('All: ' + JSON.stringify(data))),
            catchError(this.handleError)
        );
    }

    private handleError(err: HttpErrorResponse){

        let errorMessage = '';

        if(err.error instanceof ErrorEvent){
            errorMessage = `An error occured: ${err.error.message}`;
        }else{
            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }

        console.error(errorMessage);

        return throwError(errorMessage);

    }
}