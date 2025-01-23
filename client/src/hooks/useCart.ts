import { CartContext } from "@/contexts/cart-context";
import { useContext } from "react";

export default function useCart() {
  return useContext(CartContext);
}
