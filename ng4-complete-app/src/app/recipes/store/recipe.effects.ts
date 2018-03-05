import {Actions, Effect} from '@ngrx/effects';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/withLatestFrom';

import * as RecipeActions from '../store/recipe.actions';
import {RecipeModel} from '../recipe.model';
import {HttpClient, HttpRequest} from '@angular/common/http';
import * as fromRecipe from '../store/recipe.reducers';
import {Store} from "@ngrx/store";

@Injectable()
export class RecipeEffects {

  constructor(private actions$: Actions,
              private httpClient: HttpClient,
              private store: Store<fromRecipe.FeatureState>) {
  }

  @Effect()
  recipeFetch = this.actions$
    .ofType(RecipeActions.FETCH_RECIPES)
    .switchMap((action: RecipeActions.FetchRecipes) => {
      return this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json', {
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

  @Effect({dispatch: false})
  recipeStore = this.actions$
    .ofType(RecipeActions.STORE_RECIPES)
    .withLatestFrom(this.store.select('recipes'))
    .switchMap(([action, state]) => {
      const req = new HttpRequest('PUT', 'https://ng-recipe-book-a72d0.firebaseio.com/recipes.json',
        state.recipes, {
        reportProgress: true
      });
      return this.httpClient.request(req);
    });
}
