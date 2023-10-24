import {Component, Input} from '@angular/core';
import {Order} from "../../../shared/models/Order";

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent {

  @Input()
  order?: Order;

  getOrderAmount(quantity: number, price: number): string {
    return (quantity * price).toFixed(2);
  }


}
