import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Salmon Salad',
      'Healthy and delicious!',
      '../assets/img/salmon-salad.jpg',
      [
        new Ingredient('Grilled Salmon', 1),
        new Ingredient('Tomato', 1),
        new Ingredient('Cucumber', 2),
        new Ingredient('Spinach', 3),
      ]),
    new Recipe('Avocado Burger',
      'Easy and fast to make, perfect for lunch',
      '../assets/img/avocado-burger.jpg',
      [
        new Ingredient('Avocado', 1),
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1),
        new Ingredient('Frech Fries', 2),
        new Ingredient('Bacon', 3),
      ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
