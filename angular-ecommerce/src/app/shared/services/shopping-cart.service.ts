import {Injectable} from '@angular/core';
import {CartItem} from "../models/CartItem";
import {BehaviorSubject, Observable} from "rxjs";
import {SnackBarService} from "./snack-bar.service";
import {HttpClient} from "@angular/common/http";
import {Product} from "../models/Product";

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  private baseUrl: string = "http://localhost:7070/api/cart"
  private total: number = 0;
  private _cartItems: CartItem[] = [];
  private cartItemsSubject = new BehaviorSubject<CartItem[]>(this._cartItems);

  constructor(private snackBarService: SnackBarService, private http: HttpClient) {
  }

  get cartItems$(): Observable<CartItem[]> {
    return this.cartItemsSubject.asObservable();
  }

  updateCart() {
    this.total = this.getTotalPrice();
    this.cartItemsSubject.next(this._cartItems);
  }

  addCartItem(product: Product) {
    let cartItem: CartItem = {product, quantity: 1}
    this.http.post(this.baseUrl, cartItem).subscribe(
      (response) => {
        this.loadCart();
        this.updateCart();
      },
      (error) => {
        console.log("Product could not be added!")
      }
    );
  }

  getTotalPrice(): number {
    this.total = this._cartItems.reduce((previousValue, currentItem) => previousValue + (currentItem.product.price! * currentItem.quantity!), 0.00);
    this.cartItemsSubject.next(this._cartItems);
    return this.total;
  }

  decreaseQuantity(cartItem: CartItem) {
    let cartItemTemp: CartItem = {...cartItem};
    cartItemTemp.quantity = 1;
    this.http.put(this.baseUrl + "/decreaseQuantity", cartItemTemp).subscribe(
      (response) => {
        this.loadCart();
        this.updateCart();
      },
      (error) => {
        console.log("Could not delete product!")
      }
    );
  }

  deleteCartItem(cartItem: CartItem) {
    this.http.post(this.baseUrl + "/delete", cartItem).subscribe(
      (response) => {
        this._cartItems = this._cartItems.filter((cartItemTemp) => cartItemTemp.product.id !== cartItem.product.id);
        this.snackBarService.openSnackBar('Product Successfully deleted!');
        this.updateCart();
      },
      (error) => {
        console.log("Could not delete product!")
      }
    );
  }
  
  loadCart() {
    this.http.get<CartItem[]>(this.baseUrl).subscribe((cartItems) => {
      this._cartItems = cartItems;
      console.log(this._cartItems)
      this.updateCart();
    }, error => {
      console.log("Could not get CartItems!")
    })
  }

  clearCart() {
    this.http.delete(this.baseUrl).subscribe(response => {
      console.log("Successfully Cleared Cart!")
      this._cartItems = [];
      this.cartItemsSubject.next(this._cartItems);
    }, error => {
      console.log()
    })
  }
}
