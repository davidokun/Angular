import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput')
  nameInput;

  @ViewChild('amountInput')
  amountInput;

  @Output()
  newIngredient = new EventEmitter<IngredientModel>();

  constructor() { }

  ngOnInit() {
  }

  onAddIngredient() {
    this.newIngredient.emit(
      new IngredientModel(
        this.nameInput.nativeElement.value,
        this.amountInput.nativeElement.value
      )
    );
  }
}
