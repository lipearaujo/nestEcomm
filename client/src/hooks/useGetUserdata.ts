"use client";
import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";

const fetcher = (token: string): AxiosPromise => {
  return axios.post("http://localhost:3001/users/userdata", { token });
};

export function useGetUserdata(token: string) {
  const { data } = useQuery({
    queryFn: () => fetcher(token),
    queryKey: ["userdata"],
  });

  return { userdata: data?.data };
}
