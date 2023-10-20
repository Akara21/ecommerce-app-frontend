import {Component, OnInit} from '@angular/core';

import {OrderItem} from "../../../shared/models/OrderItem";
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
    this.shoppingCartService.orderItems$.subscribe(orderItems => {
      this.total = this.calculateTotal(orderItems);
    });
  }

  private calculateTotal(orderItems: OrderItem[]): number {
    return orderItems.reduce((total, item) => total + (item.price! * item.quantity!), 0.0);
  }
}
