import {Component, OnInit} from '@angular/core';
import {Product} from "../../shared/models/Product";
import {ProductService} from "../../shared/services/product.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {SnackBarService} from "../../shared/services/snack-bar.service";

/**
 * This defines the product component.
 */
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  productsCopy: Product[] = [];

  constructor(private productService: ProductService, private shoppingCartService: ShoppingCartService, private snackBarService: SnackBarService) {
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

  getProductsBySelectedCategory(selectedCategoryId: number) {
    if (!selectedCategoryId) {
      this.getAllProducts();
    } else {
      this.getProductsByCategoryId(selectedCategoryId);
    }
  }

  getProductsBySearchTerm(searchTerm: string) {
    if (searchTerm) {
      let searchTermLower = searchTerm.toLowerCase();
      this.products =
        this.products = [...this.productsCopy
          .filter((product) => product.name?.toLowerCase().includes(searchTermLower))]
    } else {
      this.products = [...this.productsCopy]
    }
  }

  addProductToShoppingCart(product: Product) {
    this.shoppingCartService.addCartItem(product);
    this.snackBarService.openSnackBar(product.name + " successfully added to your cart!")
  }
}
