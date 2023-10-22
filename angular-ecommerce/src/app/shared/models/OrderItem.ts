import {Product} from "./Product";

export interface OrderItem {
  id?: number;
  product?: Product;
  quantity?: number;
}
