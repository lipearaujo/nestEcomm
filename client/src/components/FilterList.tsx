"use client";

import { useFilter } from "@/hooks/useFilter";
import { FilterTypes } from "@/types/filter-types";
import React from "react";

const FilterList = () => {
  const { type, setType } = useFilter();

  const handleChangeType = (value: FilterTypes) => {
    setType(value);
  };

  return (
    <div className="container mx-auto mt-5">
      <ul className="flex gap-4">
        <li
          onClick={() => handleChangeType(FilterTypes.all)}
          className={`${
            type === FilterTypes.all
              ? "cursor-pointer uppercase font-bold underline decoration-4"
              : "cursor-pointer uppercase"
          }`}
        >
          ALL PRODUCTS
        </li>
        <li
          onClick={() => handleChangeType(FilterTypes.electronics)}
          className={`${
            type === FilterTypes.electronics
              ? "cursor-pointer uppercase font-bold underline decoration-4"
              : "cursor-pointer uppercase"
          }`}
        >
          ELETRONICS
        </li>
        <li
          onClick={() => handleChangeType(FilterTypes.peripherals)}
          className={`${
            type === FilterTypes.peripherals
              ? "cursor-pointer uppercase font-bold underline decoration-4"
              : "cursor-pointer uppercase"
          }`}
        >
          PERIPHERALS
        </li>
      </ul>
    </div>
  );
};

export default FilterList;
