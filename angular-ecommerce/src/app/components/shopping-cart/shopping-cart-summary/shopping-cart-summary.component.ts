import {Component, EventEmitter, OnInit, Output} from '@angular/core';

import {CartItem} from "../../../shared/models/CartItem";
import {ShoppingCartService} from "../../../shared/services/shopping-cart.service";
import {MatDialog} from "@angular/material/dialog";
import {ConfirmationDialogComponent} from "../../confirmation-dialog/confirmation-dialog.component"; // Importiere deinen ShoppingCartService

@Component({
  selector: 'app-shopping-cart-summary',
  templateUrl: './shopping-cart-summary.component.html',
  styleUrls: ['./shopping-cart-summary.component.css']
})
export class ShoppingCartSummaryComponent implements OnInit {
  total: number = 0.00;

  @Output()
  onCheckout = new EventEmitter<any>()

  constructor(private shoppingCartService: ShoppingCartService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this.shoppingCartService.cartItems$.subscribe(cartItems => {
      this.total = this.calculateTotal(cartItems);
    });
  }

  checkout() {
    this.onCheckout.emit();
  }

  openConfirmationDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '400px',
      data: {
        confirmationText: 'Do you want to place this order?',
        price: this.total
      },
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.checkout();
      }
    });
  }

  private calculateTotal(orderItems: CartItem[]): number {
    return orderItems.reduce((total, item) => total + (item.product.price! * item.quantity!), 0.0);
  }
}
