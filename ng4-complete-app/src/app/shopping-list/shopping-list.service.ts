import {IngredientModel} from '../shared/ingredient.model';
import {Subject} from 'rxjs/Subject';

export class ShoppingListService {

  ingredientsChanged = new Subject<IngredientModel[]>();
  startedEditing = new Subject<number>();

  private ingredients: IngredientModel[] = [
    new IngredientModel('Apples', 5),
    new IngredientModel('Tomatoes', 10)
  ];

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  updateIngredient(index: number, newIngredient: IngredientModel) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
