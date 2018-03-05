import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';

import * as RecipeActions from '../store/recipe.actions';
import {RecipeModel} from '../recipe.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RecipeEffects {

  constructor(private actions$: Actions,
              private httpClient: HttpClient) {
  }

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return  this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json', {
        // observe: 'response',
        observe: 'body',
        responseType: 'json'
        // responseType: 'blob'
      });
    }).map(
      (recipes) => {
        console.log(recipes);
        for (const recipe of recipes) {
          if (!recipe['shoppingListState']) {
            recipe['shoppingListState'] = [];
          }
        }
        return {
          type: RecipeActions.SET_RECIPES,
          payload: recipes
        };
      }
    );
}
