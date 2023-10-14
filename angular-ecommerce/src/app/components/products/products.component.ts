import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/Product";
import {ProductService} from "../../shared/services/product.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsCopy: Product[] = [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProductList()
      .subscribe((products) => {
          this.products = products
          this.productsCopy = [...this.products];
        }
      )
  }

  getProductsByCategoryId(id: number) {
    this.productService.getProductsByCategoryId(id)
      .subscribe((products) => {
        this.products = products;
        this.productsCopy = [...this.products]
      })
  }

  getProductsByCategoryName(selectedCategoryId: number) {
    if (!selectedCategoryId) {
      this.getAllProducts();
    } else {
      this.getProductsByCategoryId(selectedCategoryId);
    }
  }

  getProductsBySearchTerm(searchTerm: string) {
    if (searchTerm) {
      console.log("SEARCH: " + searchTerm)
      let searchTermLower = searchTerm.toLowerCase();
      this.products = [...this.productsCopy]
      this.products = this.products.filter((product) => product.name?.toLowerCase().startsWith(searchTermLower))
    } else {
      this.products = [...this.productsCopy]
    }
  }
}
