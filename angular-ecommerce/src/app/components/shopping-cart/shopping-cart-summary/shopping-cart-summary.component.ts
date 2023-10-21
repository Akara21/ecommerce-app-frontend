import {Component, OnInit} from '@angular/core';

import {CartItem} from "../../../shared/models/CartItem";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service"; // Importiere deinen ShoppingCartService

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
  total: number = 0.00;

  constructor(private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit() {
    this.shoppingCartService.cartItems$.subscribe(cartItems => {
      this.total = this.calculateTotal(cartItems);
    });
  }

  private calculateTotal(orderItems: CartItem[]): number {
    return orderItems.reduce((total, item) => total + (item.product.price! * item.quantity!), 0.0);
  }
}
