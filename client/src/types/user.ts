import { Product } from "./products";

export interface User {
  id: string;
  name: string;
  email: string;
  password: string;
  purchasedItems?: Product[];
}
