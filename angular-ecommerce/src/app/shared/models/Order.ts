import {OrderItem} from "./OrderItem";

/**
 * This defines the interface representing an order.
 */
export interface Order {
  id?: number;
  orderDate?: string;
  orderItems?: OrderItem[];
  totalAmount?: number;
}
