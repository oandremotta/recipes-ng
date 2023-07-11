import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit{
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes : Recipe[] = [
    new Recipe('A test', 'This is a simple test', 'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg'),
    new Recipe('A test', 'This is a simple test', 'https://assets.bonappetit.com/photos/64349ba03fd52da4745a35f4/1:1/w_2240,c_limit/04102023-ratatouille-lede.jpg')

  ]

  ngOnInit(): void {

  }

  onRecipeSelected(recipe : Recipe){
    this.recipeWasSelected.emit(recipe);
  }

}
