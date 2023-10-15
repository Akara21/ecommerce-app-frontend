import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {ProductCategory} from "../../shared/models/ProductCategory";
import {ProductCategoryService} from "../../shared/services/product-category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  activeCategory: string = 'Alle';
  categories: ProductCategory[] = [];

  @Output()
  onSelectCategory = new EventEmitter<number>();

  constructor(private productCategoryService: ProductCategoryService) {
  }

  ngOnInit() {
    this.getAllCategories();
  }

  setActiveCategory(category: ProductCategory) {
    this.activeCategory = category.categoryName!;
    this.onSelectCategory.emit(category.id);
  }

  getAllCategories() {
    this.productCategoryService.getCategoryList().subscribe((categories) => {
      this.categories = categories;
    })
  }
}
