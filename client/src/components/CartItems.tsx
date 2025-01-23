"use client";
import useCart from "@/hooks/useCart";
import { Product } from "@/types/products";
import React, { useState } from "react";

type Props = {
  product?: Product | any;
};

const CartItems = (props: Props) => {
  const { addItems, removeItems, getCartItemCount, updateCartItemCount } =
    useCart();

  const cartItemCount = getCartItemCount(props.product.id);

  return (
    <div className="mt-5 flex justify-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="bg-white shadow-xl shadow-zinc-600 w-2/3 h-60 rounded-md flex gap-5">
          <div className="w-1/3 flex items-center justify-center">
            <div className="bg-zinc-900 w-[90%] h-[90%] rounded-md">photo</div>
          </div>
          <div className="flex-1 flex flex-col gap-4 items-center justify-center">
            <h3 className="font-extrabold text-2xl">{props.product?.name}</h3>
            <p className="text-2xl">Price: U${props.product?.price}</p>
            <div className="w-32 border border-zinc-900  rounded-md flex">
              <button
                className="w-1/3 border-r border-zinc-900 "
                onClick={() => removeItems(props.product?.id)}
              >
                -
              </button>
              <input
                type="text"
                name=""
                id=""
                value={cartItemCount}
                onChange={(e) =>
                  updateCartItemCount(Number(e.target.value), props.product.id)
                }
                readOnly
                className="w-1/2 p-2 outline-none font-bold text-center"
              />
              <button
                className="w-1/3 border-l border-zinc-900 "
                onClick={() => addItems(props.product?.id)}
              >
                +
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
