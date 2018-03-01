import {RecipeModel} from '../recipe.model';
import {IngredientModel} from '../../shared/ingredient.model';

export interface FeatureState {
  recipes: State;
}

export interface State {
  recipes: RecipeModel[];
}

const initialState: State = {
  recipes: [
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
  ]
};

export function recipeReducer(state = initialState, action) {
  return state;
}
