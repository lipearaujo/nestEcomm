import type { Metadata } from "next";

import "./globals.css";

import DefaultProviders from "@/components/DefaultProviders";
import FilterContextProvider from "@/contexts/filter-context";
import CartContextProvider from "@/contexts/cart-context";

export const metadata: Metadata = {
  title: "N-eComm",
  description: "E-commerce made with NextJS, Prisma and NestJS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <DefaultProviders>
          <CartContextProvider>
            <FilterContextProvider>{children}</FilterContextProvider>
          </CartContextProvider>
        </DefaultProviders>
      </body>
    </html>
  );
}
