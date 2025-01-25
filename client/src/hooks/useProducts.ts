"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { useFilter } from "./useFilter";
import { Product } from "@/types/products";
import { useDeferredValue } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string;

const fetcher = (): AxiosPromise<[]> => {
  return axios.get(`${process.env.NEXT_PUBLIC_API_URL}/products`);
};

export function useProducts() {
  const { search } = useFilter();
  const searchDeferred = useDeferredValue(search);
  const { data } = useQuery({
    queryFn: fetcher,
    queryKey: ["products"],
  });

  const products = data?.data;
  const searchProducts = products?.filter((product: Product) =>
    product.name.toLowerCase().includes(searchDeferred.toLowerCase())
  );

  return { data: searchProducts };
}
