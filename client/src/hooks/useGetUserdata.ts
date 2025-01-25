"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (token: string): AxiosPromise => {
  return axios.post(`${process.env.NEXT_PUBLIC_API_URL}/users/userdata`, {
    token,
  });
};

export function useGetUserdata(token: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(token),
    queryKey: ["userdata"],
  });

  return { userdata: data?.data };
}
