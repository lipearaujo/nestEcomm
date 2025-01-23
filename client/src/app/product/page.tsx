"use client";
import BackButton from "@/components/BackButton";
import SingleProductCard from "@/components/SingleProductCard";
import { useSingleProduct } from "@/hooks/useSingleProduct";

import React from "react";

const Product = ({ searchParams }: { searchParams: { id: string } }) => {
  const { data } = useSingleProduct(searchParams.id);

  return (
    <div className="container mx-auto mt-10">
      <BackButton navigate="/" />
      <SingleProductCard product={data} />
    </div>
  );
};

export default Product;
