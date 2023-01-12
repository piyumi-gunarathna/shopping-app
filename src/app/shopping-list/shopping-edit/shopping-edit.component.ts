import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') nameInputRef?: ElementRef;
  @ViewChild('amountInput') amountInputRef?: ElementRef;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  onAddItem(){
      const ingredientName = this.nameInputRef?.nativeElement?.value;
      const ingredientAmount = this.amountInputRef?.nativeElement?.value;
      const newIngredient = new Ingredient(ingredientName, ingredientAmount);
      this.shoppingListService.addIngredient(newIngredient);
  }

  onDeleteItem(){

  }

  onClearItem(){

  }

}
