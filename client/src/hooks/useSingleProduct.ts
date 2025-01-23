"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (id: string): AxiosPromise => {
  return axios.get(`http://localhost:3001/products/${id}`);
};

export function useSingleProduct(id: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(id),
    queryKey: ["product", id],
    enabled: !!id,
  });

  return { data: data?.data };
}
