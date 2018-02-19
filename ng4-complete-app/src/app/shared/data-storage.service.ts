import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.httpClient.put('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json?auth=' + token,
      this.recipeService.getRecipes(), {
        // observe: 'events'
        observe: 'body'
      });
  }

  getRecipes() {
    const token = this.authService.getToken();
    // this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json?auth=' + token,{
      // observe: 'response',
      observe: 'body',
      responseType: 'json'
      // responseType: 'blob'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          return recipes;
        }
      )
      .subscribe(
        (recipes: RecipeModel[]) => {
          this.recipeService.setRecipes(recipes);
        }
      );
  }
}
