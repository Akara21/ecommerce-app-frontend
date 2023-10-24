import {OrderItem} from "./OrderItem";

export interface Order {
  id?: number;
  orderDate?: string;
  orderItems?: OrderItem[];
  totalAmount?: number;
}
