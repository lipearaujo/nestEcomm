"use client";

import { Product } from "@/types/products";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  product: Product;
};

const ProductsCard = (props: Props) => {
  const router = useRouter();

  const handleNavigate = () => {
    router.push("/product?id=" + props.product.id);
  };

  return (
    <div
      className="w-64 flex flex-col bg-white cursor-pointer"
      onClick={handleNavigate}
    >
      <div className="w-64 h-[300px] bg-zinc-900 flex justify-center items-center rounded-tl-md rounded-tr-md">
        {/*         <Image
          src={props.product.imageURL}
          width={256}
          height={300}
          alt={props.product.name}
        /> */}
      </div>
      <div className="p-2 flex flex-col gap-2">
        <h3 className="text-base text-gray-600">{props.product.name}</h3>
        <div className="bg-gray-200 w-full h-[2px]"></div>
        {props.product.stockQuantity === 0 ? (
          <p className="font-bold">OUT OF STOCK</p>
        ) : (
          <p className="font-bold">U$ {props.product.price}</p>
        )}
      </div>
    </div>
  );
};

export default ProductsCard;
