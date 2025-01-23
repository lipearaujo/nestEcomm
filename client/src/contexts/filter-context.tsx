"use client";
import { FilterTypes } from "@/types/filter-types";
import { createContext, ReactNode, useState } from "react";
import React from "react";

export const FilterContext = createContext({
  search: "",
  type: FilterTypes.all,
  setType: (value: FilterTypes) => {},
  setSearch: (value: string) => {},
});

type ProviderProps = {
  children: ReactNode;
};

const FilterContextProvider = ({ children }: ProviderProps) => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState(FilterTypes.all);

  return (
    <FilterContext.Provider
      value={{
        search,
        type,
        setType,
        setSearch,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

export default FilterContextProvider;
