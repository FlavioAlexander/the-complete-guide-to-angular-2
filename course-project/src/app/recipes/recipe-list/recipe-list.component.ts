import { Recipe } from './../recipe.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is simple a tes', 
    'http://maxpixel.freegreatpicture.com/static/photo/2x/Meat-Power-Recipe-Food-Dishes-Pork-1459693.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
