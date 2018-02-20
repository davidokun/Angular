import {Action} from '@ngrx/store';

import {IngredientModel} from '../shared/ingredient.model';

export const ADD_INGREDIENT = 'ADD_INGREDIENT';

const initialState = {
  ingredients: [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ]
};

export function shoppingListReducers (state = initialState, action: Action) {

  switch (action.type) {
    case ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, action]
      }
  }
  return state;
}
