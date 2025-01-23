"use client";
import React, { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: ReactNode;
};

const DefaultProviders = (props: Props) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>{props.children}</QueryClientProvider>
  );
};

export default DefaultProviders;
