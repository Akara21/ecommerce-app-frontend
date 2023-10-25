import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Order} from "../../../shared/models/Order";

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
  @Input()
  orders: Order[] = [];

  @Output()
  onSelectOrder = new EventEmitter<Order>()

  activeOrderId: number = 0;


  ngOnInit() {
    this.loadOrdersAsync()
  }

  setActiveOrderId(order: Order) {
    this.activeOrderId = order.id!;
    this.selectOrder(order);
  }

  selectOrder(order: Order) {
    this.onSelectOrder.emit(order);
    window.scrollTo({top: 0, behavior: 'smooth'});
  }

  loadOrdersAsync() {
    const interValId = setInterval(() => {
      if (this.orders.length > 0) {
        this.setActiveOrderId(this.orders[0]);
        clearInterval(interValId)
      }
    }, 1); // Beispielhafte Verzögerung
  }
}
