import {Component, OnInit} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit() {
  }

  onAddIngredient(form: NgForm) {
    const value = form.value;
    this.shoppingListService.addIngredient(
      new IngredientModel(
        value.name,
        value.amount
      )
    );
  }
}
