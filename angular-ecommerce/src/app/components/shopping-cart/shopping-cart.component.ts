import {Component, OnInit} from '@angular/core';
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";
import {CartItem} from "../../shared/models/CartItem";
import {OrderService} from "../../shared/services/order.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private shoppingCartService: ShoppingCartService, private orderService: OrderService, private router: Router) {
  }

  ngOnInit() {
    this.shoppingCartService.loadCart();
    this.getShoppingCartList();
  }

  decreaseQuantity(cartItem: CartItem) {
    this.shoppingCartService.decreaseQuantity(cartItem);
  }

  addCartItem(cartItem: CartItem) {
    this.shoppingCartService.addCartItem(cartItem.product)
  }

  deleteCartItem(cartItem: CartItem) {
    this.shoppingCartService.deleteCartItem(cartItem)
  }

  getShoppingCartList() {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.cartItems = items;
    });
  }

  checkout() {
    console.log("ITEMS TO CHECKOUT ", this.cartItems)
    this.orderService.addOrders(this.cartItems).subscribe(response => {
      console.log("SUCCESS")
      this.router.navigate(['orders'])
    }, error => {
      console.log("ERROR: ", error)
    })
  }


}
