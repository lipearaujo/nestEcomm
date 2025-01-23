"use client";
import { useGetPurchasedItems } from "@/hooks/useGetPurchasedItems";
import { Product } from "@/types/products";
import React from "react";

type Props = {
  product: Product;
};

const Purchased = (props: Props) => {
  return (
    <div className="my-5 flex justify-center">
      <div className="flex flex-col items-center gap-4 w-full">
        <div className="bg-white shadow-xl shadow-zinc-600 w-1/2 h-60 rounded-md flex gap-5">
          <div className="w-1/2 flex items-center justify-center">
            <div className="bg-zinc-900 w-[90%] h-[90%] rounded-md"></div>
          </div>
          <div className="w-1/2 flex flex-col gap-4 items-center justify-center">
            <h3 className="font-extrabold text-2xl">{props.product.name}</h3>
            <p className="text-2xl">Price: U${props.product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchased;
