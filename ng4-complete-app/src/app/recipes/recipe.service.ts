import {RecipeModel} from './recipe.model';
import {Injectable} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from "rxjs/Subject";

@Injectable()
export class RecipeService {

  recipesChange = new Subject<RecipeModel[]>();

  constructor (private shoppingListService: ShoppingListService) {}

  private recipes: RecipeModel[] = [
    new RecipeModel('Pizza',
      'Peperoni Pizza',
      'https://c1.staticflickr.com/5/4097/4932649560_807c7382e4_b.jpg',
      [new IngredientModel('Cheese', 1), new IngredientModel('Peperoni', 8)]),
    new RecipeModel('Hamburger',
      'Hamburger with meat and salad',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAiJasapoNK5KqZJnU1I9a9r3Hd1mwCAoSI-h-vtJj5aRfJu2M',
      [new IngredientModel('Meat', 1), new IngredientModel('Bread', 2)]),
    new RecipeModel('Soup',
      'Vegetables Soup',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF71o_RTMl1PKU8g1s_ofEwTgd04jtcTT21SLX0aRbXpRMNZXXnQ',
      [new IngredientModel('Tomato', 1), new IngredientModel('Garlic', 4)])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: IngredientModel[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: RecipeModel) {
    this.recipes.push(recipe);
    this.recipesChange.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: RecipeModel) {
    this.recipes[index] = newRecipe;
    this.recipesChange.next(this.recipes.slice());
  }
}
