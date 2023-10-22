import {Component, EventEmitter, Input, Output} from '@angular/core';
import {CartItem} from "../../../shared/models/CartItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input()
  cartItem: CartItem = {product: {}}

  @Output()
  onIncreaseQuantity = new EventEmitter<CartItem>();

  @Output()
  onDeceaseQuantity = new EventEmitter<CartItem>();

  @Output()
  onDeleteOrderItem = new EventEmitter<CartItem>();

  constructor(private router: Router) {
  }

  navigateToDetails() {
    this.router.navigate([`products/${this.cartItem.product.id}`]);
  }

  increaseQuantity() {
    this.onIncreaseQuantity.emit(this.cartItem);
  }

  decreaseQuantity() {
    this.onDeceaseQuantity.emit(this.cartItem);
  }

  deleteOrderItem() {
    this.onDeleteOrderItem.emit(this.cartItem);
  }

}
