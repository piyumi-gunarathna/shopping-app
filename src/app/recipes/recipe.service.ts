import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe('A test recipe', 
            'this is a test', 
            'https://www.acouplecooks.com/wp-content/uploads/2020/01/Sheet-Pan-Dinner-019.jpg',
            [new Ingredient('Meat',1), new Ingredient('French Fries', 20)]),
        new Recipe(
                'A test recipe 2', 
                'this is a test 2', 
                'https://cookieandkate.com/images/2021/09/baked-sweet-potato-recipe-1-1097x1650.jpg',
                [
                    new Ingredient('Bread',1), 
                    new Ingredient('Meat', 2)
                ]
        )
    ];

    constructor(private shoppingListService:ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    addIngredientsToShoppingList(ingredients :Ingredient[]){
        this.shoppingListService.addIngredients(ingredients);
    }

}