/**
 * This defines the interface representing a product.
 */
export interface Product {
  id?: number;
  name?: string;
  description?: string;
  price?: number;
  imageUrl?: string;
  material?: string;
  weight?: number;
  comfortDuration?: number;
  usageArea?: string;
}
