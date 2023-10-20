import {Injectable} from '@angular/core';
import {OrderItem} from "../models/OrderItem";
import {Product} from "../models/Product";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {


  private total: number = 0;

  constructor(private _snackBar: MatSnackBar) {
  }

  private _orderItems: OrderItem[] = [];

  private orderItemsSubject = new BehaviorSubject<OrderItem[]>(this._orderItems);

  set orderItems(value: OrderItem[]) {
    this._orderItems = value;
  }

  get orderItems$(): Observable<OrderItem[]> {
    return this.orderItemsSubject.asObservable();
  }

  updateCart() {
    this.total = this.getTotalPrice();
    this.orderItemsSubject.next(this._orderItems);
  }

  addOrderItem(product: Product) {
    const {price, id, imageUrl, name} = product;
    let orderItemFound = this._orderItems.find(orderItem => orderItem.id === id);
    if (!orderItemFound) {
      let orderItem: OrderItem = {id, price, quantity: 1, imageUrl, name};
      this._orderItems.push(orderItem);
    } else {
      orderItemFound.quantity!++;
    }
    this.updateCart();
    this.openSnackBar("Product Successfully added!");
  }


  getTotalPrice(): number {
    this.total = this._orderItems.reduce((previousValue, currentItem) => previousValue + (currentItem.price! * currentItem.quantity!), 0.00);
    this.orderItemsSubject.next(this._orderItems);
    return this.total;
  }


  addQuantity(orderItem: OrderItem) {
    orderItem.quantity!++;
    this.updateCart();
  }

  reduceQuantity(orderItem: OrderItem) {
    if (orderItem.quantity === 1) {
      this.deleteOrderItem(orderItem);
    } else {
      orderItem.quantity!--;
    }
    this.updateCart();
  }

  deleteOrderItem(orderItemToDelete: OrderItem) {
    this._orderItems = this._orderItems.filter(orderItem => orderItem.id !== orderItemToDelete.id);
    this.updateCart();
  }

  openSnackBar(message: string) {
    this._snackBar.open(message, '', {duration: 2000, panelClass: 'green-snackbar'});
  }

}
