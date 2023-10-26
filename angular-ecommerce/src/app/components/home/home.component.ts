import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../shared/services/product.service";
import {Product} from "../../shared/models/Product";
import {SnackBarService} from "../../shared/services/snack-bar.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bestSeller: Product[] = [];

  constructor(private productService: ProductService,
              private snackBarService: SnackBarService,
              private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.productService.getProductList().subscribe((products) => {
      this.bestSeller = products.slice(0, 3);
      console.log(this.bestSeller)
    })
    this.shoppingCartService.loadCart();
  }

  addProductToShoppingCart(product: Product) {
    this.shoppingCartService.addCartItem(product);
    this.snackBarService.openSnackBar(product.name + " successfully added to your cart!")
  }
}
