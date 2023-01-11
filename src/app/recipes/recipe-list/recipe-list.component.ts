import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'this is a test', 'https://www.acouplecooks.com/wp-content/uploads/2020/01/Sheet-Pan-Dinner-019.jpg' ),
    new Recipe('A test recipe 2', 'this is a test 2', 'https://cookieandkate.com/images/2021/09/baked-sweet-potato-recipe-1-1097x1650.jpg' )
  ];
  constructor() {}

  ngOnInit() {}

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
