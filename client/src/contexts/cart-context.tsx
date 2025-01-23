"use client";

import { useProducts } from "@/hooks/useProducts";
import { CartItem } from "@/types/item-cart";
import { Product } from "@/types/products";
import axios from "axios";
import { useRouter } from "next/navigation";
import { createContext, ReactNode, useState } from "react";

export interface CartProps {
  addItems: (productId: string) => void;
  removeItems: (productId: string) => void;
  checkout: () => void;
  getCartItemCount: (productId: string) => number;
  updateCartItemCount: (newAmount: number, productId: string) => void;
  getTotalCartAmount: () => number;
}

export const CartContext = createContext<CartProps>({} as any);

type ProviderProps = {
  children: ReactNode;
};

const CartContextProvider = ({ children }: ProviderProps) => {
  const [itens, setItens] = useState<CartItem[]>([]) as any;
  const router = useRouter();
  const { data } = useProducts();

  const addItems = (productId: string) => {
    if (!itens[productId]) {
      setItens((prev: any) => ({ ...prev, [productId]: 1 }));
    } else {
      setItens((prev: any) => ({ ...prev, [productId]: prev[productId] + 1 }));
    }
  };

  const removeItems = (productId: string) => {
    if (!itens[productId]) return;

    if (itens[productId] == 0) return;

    setItens((prev: any) => ({ ...prev, [productId]: prev[productId] - 1 }));
  };

  const updateCartItemCount = (newAmount: number, productId: string) => {
    if (newAmount < 0) return;

    setItens((prev: any) => ({ ...prev, [productId]: newAmount }));
  };

  const getCartItemCount = (productId: string): number => {
    if (productId in itens) return itens[productId];

    return 0;
  };

  const getTotalCartAmount = (): number => {
    let totalAmount = 0;

    for (const item in itens) {
      if (itens[item] > 0) {
        let itemInfo: Product = data?.find(
          (product: Product) => product.id === item
        );

        totalAmount += itens[item] * itemInfo.price;
      }
    }

    return totalAmount;
  };

  const checkout = async () => {
    const body = {
      customerId: localStorage.getItem("userId"),
      itens: itens,
    };

    try {
      await axios.post("http://localhost:3001/products/checkout", body);

      setItens({});
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CartContext.Provider
      value={{
        addItems,
        removeItems,
        checkout,
        getCartItemCount,
        updateCartItemCount,
        getTotalCartAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
