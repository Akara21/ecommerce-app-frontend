import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {ShoppingCartService} from "../../shared/services/shopping-cart.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  amountOfShoppingCartItems: number = 0;

  constructor(private authService: AuthService, private shoppingCartService: ShoppingCartService) {
  }

  ngOnInit(): void {
    this.getShoppingCartList();
  }

  getShoppingCartList() {
    this.shoppingCartService.cartItems$.subscribe(items => {
      this.amountOfShoppingCartItems = items.length;
    });
  }

  logout() {
    this.authService.logout();
  }

}
