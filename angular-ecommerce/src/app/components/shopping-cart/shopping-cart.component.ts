import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {OrderItem} from "../../shared/models/OrderItem";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderItems: OrderItem[] = [];
  total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.getShoppingCartList();
  }

  decreaseQuantity(orderItem: OrderItem) {
    this.shoppingCartService.reduceQuantity(orderItem);
  }

  increaseQuantity(orderItem: OrderItem) {
    this.shoppingCartService.addQuantity(orderItem);
  }

  deleteOrderItem(orderItem: OrderItem) {
    this.shoppingCartService.deleteOrderItem(orderItem);
  }

  getShoppingCartList() {
    this.shoppingCartService.orderItems$.subscribe(items => {
      this.orderItems = items;
    });
  }
}
