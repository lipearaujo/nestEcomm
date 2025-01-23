"use client";

import FilterList from "@/components/FilterList";
import Header from "@/components/Header";
import ProductsList from "@/components/ProductsList";

export default function Home() {
  return (
    <main className="bg-[#F0F0F5]">
      <Header />
      <FilterList />
      <ProductsList />
    </main>
  );
}
