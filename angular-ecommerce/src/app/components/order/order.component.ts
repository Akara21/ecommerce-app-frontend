import {Component, OnInit} from '@angular/core';
import {Order} from "../../shared/models/Order";
import {OrderService} from "../../shared/services/order.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  orders: Order[] = [];
  selectedOrder!: Order;

  constructor(private orderService: OrderService, private datePipe: DatePipe) {
  }

  ngOnInit(): void {
    this.getOrders()
  }


  getOrders() {
    this.orderService.getOrders().subscribe(orders => {
      for (let order of orders) {
        let transformedDate = this.datePipe.transform(order.orderDate, "MMM dd, yyy");
        order.orderDate = transformedDate!;
      }
      this.orders = orders.reverse();
    })
  }

  getOrderItems(order: Order) {
    this.selectedOrder = order;
  }
}
