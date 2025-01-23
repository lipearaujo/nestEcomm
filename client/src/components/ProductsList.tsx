"use client";
import React, { useEffect, useState } from "react";

import { useFilter } from "@/hooks/useFilter";

import FilteredProducts from "./FilteredProducts";

type Props = {};

const ProductsList = (props: Props) => {
  const { type } = useFilter();

  return (
    <>
      <FilteredProducts type={type} />
    </>
  );
};

export default ProductsList;
