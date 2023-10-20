import {Component, EventEmitter, Input, Output} from '@angular/core';
import {OrderItem} from "../../../shared/models/OrderItem";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.css']
})
export class ShoppingCartItemComponent {

  @Input()
  orderItem: OrderItem = {}

  @Output()
  onIncreaseQuantity = new EventEmitter<OrderItem>();

  @Output()
  onDeceaseQuantity = new EventEmitter<OrderItem>();

  @Output()
  onDeleteOrderItem = new EventEmitter<OrderItem>();

  constructor(private router: Router) {
  }

  navigateToDetails() {
    this.router.navigate([`products/${this.orderItem.id}`]);
  }

  increaseQuantity() {
    this.onIncreaseQuantity.emit(this.orderItem);
  }

  decreaseQuantity() {
    this.onDeceaseQuantity.emit(this.orderItem);
  }

  deleteOrderItem() {
    this.onDeleteOrderItem.emit(this.orderItem);
  }

}
