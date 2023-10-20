import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Product} from "../../../shared/models/Product";
import {Router} from "@angular/router";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input()
  product: Product = {}

  @Output()
  onAddToShoppingCart = new EventEmitter<Product>

  constructor(private router: Router, private shoppingCartService: ShoppingCartService) {
  }

  navigateToDetails() {
    this.router.navigate([`products/${this.product.id}`]);
  }

  addProductToShoppingCart() {
    this.onAddToShoppingCart.emit(this.product);
  }
}
