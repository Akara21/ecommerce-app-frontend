import {OrderItem} from "./OrderItem";

export interface Order {
  orderDate?: string;
  orderItems?: OrderItem[];
  totalAmount?: number;
}
