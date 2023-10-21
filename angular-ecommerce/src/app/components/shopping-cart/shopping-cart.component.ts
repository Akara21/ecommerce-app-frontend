import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {CartItem} from "../../shared/models/CartItem";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  orderItems: CartItem[] = [];
  total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCartService.loadCart();
    this.getShoppingCartList();
  }

  decreaseQuantity(cartItem: CartItem) {
    this.shoppingCartService.decreaseQuantity(cartItem);
  }

  /*increaseQuantity(orderItem: CartItem) {
    this.shoppingCartService.addQuantity(orderItem);
  }*/

  addCartItem(cartItem: CartItem) {
    this.shoppingCartService.addCartItem(cartItem.product)
  }

  deleteCartItem(cartItem: CartItem) {
    this.shoppingCartService.deleteCartItem(cartItem)
  }

  getShoppingCartList() {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.orderItems = items;
    });
  }
}
