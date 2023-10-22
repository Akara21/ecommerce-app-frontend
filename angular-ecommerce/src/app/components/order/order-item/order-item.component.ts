import {Component, Input} from '@angular/core';
import {Order} from "../../../shared/models/Order";

@Component({
  selector: 'app-order-item',
  templateUrl: './order-item.component.html',
  styleUrls: ['./order-item.component.css']
})
export class OrderItemComponent {

  @Input()
  order: Order = {}
}
