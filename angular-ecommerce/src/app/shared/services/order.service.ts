import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Order} from "../models/Order";
import {Observable} from "rxjs";
import {CartItem} from "../models/CartItem";
import {environment} from "../../../environments/environment.prod";

/**
 * This defines the service class calling the order-API-endpoint.
 */

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private baseUrl: string = environment.apiUrl + "/order"

  constructor(private http: HttpClient) {
  }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.baseUrl);
  }

  addOrders(cartItems: CartItem[]) {
    return this.http.post(this.baseUrl, cartItems);
  }
}
