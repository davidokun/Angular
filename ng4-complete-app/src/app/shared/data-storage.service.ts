import {Injectable} from '@angular/core';
import {RecipeService} from '../recipes/recipe.service';
import {RecipeModel} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';

@Injectable()
export class DataStorageService {

  constructor(private httpClient: HttpClient,
              private recipeService: RecipeService,
              private authService: AuthService) {}

  storeRecipes() {
    const headers = new HttpHeaders().set('myHeader1', 'mayheader1-value')
                                     .set('myHeader2', 'mayheader2-value');

    // return this.httpClient.put('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json',
    //   this.recipeService.getRecipes(), {
    //     // observe: 'events'
    //     observe: 'body',
    //     params: params,
    //     headers: headers
    //   });

    const req = new HttpRequest('PUT', 'https://ng-recipe-book-a72d0.firebaseio.com/recipes.json', this.recipeService.getRecipes(), {
      reportProgress: true
    });

    return this.httpClient.request(req);
  }

  getRecipes() {
    // this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json?auth=' + token)
    this.httpClient.get<RecipeModel[]>('https://ng-recipe-book-a72d0.firebaseio.com/recipes.json', {
      // observe: 'response',
      observe: 'body',
      responseType: 'json'
      // responseType: 'blob'
    })
      .map(
        (recipes) => {
          console.log(recipes);
          for (const recipe of recipes) {
            if (!recipe['shoppingListState']) {
              recipe['shoppingListState'] = [];
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
