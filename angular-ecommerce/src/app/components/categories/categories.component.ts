import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent {
  activeCategory: string = '';
  categories: { categoryname: string }[] = [
    { categoryname: 'name1' },
    { categoryname: 'name2' },
  ];

  setActiveCategory(categoryName: string) {
    this.activeCategory = categoryName;
  }
}
