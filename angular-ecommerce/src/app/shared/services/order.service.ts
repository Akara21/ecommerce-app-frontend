import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/Order";
import {Observable} from "rxjs";
import {CartItem} from "../models/CartItem";

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = "http://localhost:7070/api/order"

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  addOrders(cartItems: CartItem[]) {
    return this.http.post(this.baseUrl, cartItems);
  }
}
