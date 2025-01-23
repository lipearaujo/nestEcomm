"use client";

import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import CartItems from "@/components/CartItems";
import useCart from "@/hooks/useCart";
import { useProducts } from "@/hooks/useProducts";
import { Product } from "@/types/products";

type Props = {};

const Cart = (props: Props) => {
  const { checkout, getCartItemCount, getTotalCartAmount } = useCart();

  const { data } = useProducts();

  const totalAmount = getTotalCartAmount();

  return (
    <div className="container mx-auto my-10">
      <h1 className="text-center font-extrabold text-4xl my-10">
        Your Cart Items
      </h1>

      {data?.map((product: Product) => {
        if (getCartItemCount(product.id) !== 0) {
          return <CartItems product={product} key={product.id} />;
        }
      })}

      {totalAmount > 0 ? (
        <div className="mt-5 flex flex-col items-center gap-4">
          <p className="font-bold text-lg">
            Subtotal: ${totalAmount.toFixed(2)}
          </p>
          <div className="flex justify-center gap-4">
            <Button style="w-[190px] h-10 text-white font-bold bg-zinc-900 rounded-md hover:text-zinc-900 hover:shadow-xl hover:shadow-zinc-900 hover:bg-white hover:duration-300 hover:ease-in-out">
              <Link href="/">Continue Shopping</Link>
            </Button>
            <Button
              onClick={() => checkout()}
              style="w-[190px] h-10 text-white font-bold bg-zinc-900 rounded-md hover:text-zinc-900 hover:shadow-xl hover:shadow-zinc-900 hover:bg-white hover:duration-300 hover:ease-in-out"
            >
              Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-10">
          <h1 className="text-center font-bold text-2xl">
            Your Shopping Cart is Empty!
          </h1>
          <Button style="w-[190px] h-10 text-white font-bold bg-zinc-900 rounded-md hover:text-zinc-900 hover:shadow-xl hover:shadow-zinc-900 hover:bg-white hover:duration-300 hover:ease-in-out">
            <Link href="/">Continue Shopping</Link>
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
