import {RecipeModel} from '../recipe.model';
import {IngredientModel} from '../../shared/ingredient.model';
import * as RecipeActions from './recipe.actions';
import * as fromApp from '../../store/app.reducers';

export interface FeatureState extends fromApp.AppState {
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

export function recipeReducer(state = initialState, action: RecipeActions.RecipeActions) {

  switch (action.type) {
    case (RecipeActions.SET_RECIPES):
      return {
        ...state,
        recipes: [...action.payload]
      };
    case (RecipeActions.ADD_RECIPES):
      return {
        ...state,
        recipes: [...state.recipes, action.payload]
      };
    case (RecipeActions.UPDATE_RECIPES):
      const recipe = state.recipes[action.payload.index];
      const updatedRecipe = {
        ...recipe,
        ...action.payload.updateRecipe
      };
      const recipes = [...state.recipes];
      recipes[action.payload.index] = updatedRecipe;
      return {
        ...state,
        recipes: recipes
      };
    case (RecipeActions.DELETE_RECIPES):
      const deletedRecipes = [...state.recipes];
      deletedRecipes.splice(action.payload, 1);
      return {
        ...state,
        recipes: deletedRecipes
      };
    default:
      return state;
  }
}
