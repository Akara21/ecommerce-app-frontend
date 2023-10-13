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


  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.getAllProducts();
  }

  getAllProducts() {
    this.productService.getProductList()
      .subscribe((products) => {
          console.log(products)
          this.products = products
        }
      )
  }

  getProductsByCategoryId(id: number) {
    this.productService.getProductsByCategoryId(id)
      .subscribe((products) => this.products = products)
  }

  getProductsByCategoryName(selectedCategoryId: number) {
    if (!selectedCategoryId) {
      this.getAllProducts();
    } else {
      this.getProductsByCategoryId(selectedCategoryId);
    }
  }
}
