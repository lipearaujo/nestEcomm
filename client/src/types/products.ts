export interface Product {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  stockQuantity: number;
  imageURL: string;
  userId?: null | string;
}
