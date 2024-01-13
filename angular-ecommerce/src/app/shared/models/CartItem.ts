import {Product} from "./Product";

/**
 * This defines the interface representing a cart item.
 */
export interface CartItem {
  product: Product;
  quantity?: number;
}
