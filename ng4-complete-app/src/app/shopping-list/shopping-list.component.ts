import {Component, OnDestroy, OnInit} from '@angular/core';
import {IngredientModel} from '../shared/ingredient.model';
import {ShoppingListService} from './shopping-list.service';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {

  shoppingListState: Observable<{ingredients: IngredientModel[]}>;
  private subscription: Subscription;

  constructor(private shoppingListService: ShoppingListService,
              private store: Store<{shoppingList: {ingredients: IngredientModel[]}}>) { }

  ngOnInit() {
    this.shoppingListState = this.store.select('shoppingList');

    // this.subscription = this.shoppingListService.ingredientsChanged.subscribe(
    //   (shoppingListState: IngredientModel[]) => {
    //     this.shoppingListState = shoppingListState;
    //   }
    // );
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingListService.startedEditing.next(index);
  }
}
