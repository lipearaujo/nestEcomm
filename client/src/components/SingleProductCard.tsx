import { Product } from "@/types/products";
import React from "react";
import { FaCartPlus } from "react-icons/fa";
import Button from "./Button";
import useCart from "@/hooks/useCart";

type Props = {
  product: Product;
};

const SingleProductCard = (props: Props) => {
  const { addItems, getCartItemCount } = useCart();

  const count = getCartItemCount(props.product?.id);

  return (
    <div className="mt-5 flex h-[580px]">
      <div className="w-2/5 ">
        <div className="w-full h-full bg-zinc-900"></div>
      </div>
      <div className="flex flex-col flex-1 justify-between px-10">
        <div className="flex flex-col gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-base text-gray-600 font-semibold">
              {props.product?.category}
            </p>
            <p className="text-3xl font-bold text-gray-600">
              {props.product?.name}
            </p>
            <p className="font-bold text-xl">U$ {props.product?.price}</p>
          </div>
          <div className="">
            <p className="text-gray-500 font-semibold">DESCRIPTION</p>
            <p className="text-gray-600">{props.product?.description}</p>
          </div>
        </div>

        <Button
          onClick={() => addItems(props.product.id)}
          style="flex items-center justify-center gap-4 border border-zinc-900 w-[448px] h-[44px] rounded-md font-semibold hover:bg-zinc-900 hover:text-[#f0f0f5]"
        >
          <FaCartPlus size={24} />
          ADD TO CART {count > 0 && <>({count})</>}
        </Button>
      </div>
    </div>
  );
};

export default SingleProductCard;
