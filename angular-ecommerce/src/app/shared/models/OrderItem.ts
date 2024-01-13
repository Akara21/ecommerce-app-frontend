import {Product} from "./Product";

/**
 * This defines the interface representing an order item.
 */
export interface OrderItem {
  id?: number;
  product?: Product;
  quantity?: number;
}
