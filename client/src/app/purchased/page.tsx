"use client";
import React from "react";
import BackButton from "@/components/BackButton";
import Purchased from "@/components/Purchased";
import { useGetPurchasedItems } from "@/hooks/useGetPurchasedItems";
import { Product } from "@/types/products";

type Props = {};

const PurchasedItems = (props: Props) => {
  const { purchasedItems } = useGetPurchasedItems(
    typeof window !== "undefined"
      ? (window.localStorage.getItem("userId") as string)
      : ""
  );

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-center font-extrabold text-4xl mb-5">
        Previously Purchased Items
      </h1>
      <BackButton navigate="/" />
      {purchasedItems?.map((product: Product) => {
        console.log(product);
        return <Purchased product={product} key={product.id} />;
      })}
    </div>
  );
};

export default PurchasedItems;
