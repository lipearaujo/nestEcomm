import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductsCard from "./ProductsCard";
import { Product } from "@/types/products";
import { useProducts } from "@/hooks/useProducts";
import { useFilter } from "@/hooks/useFilter";

type Props = {
  type: number;
};

const FilteredProducts = (props: Props) => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { search } = useFilter();
  const { data }: any = useProducts();

  const getFilteredProducts = async () => {
    try {
      if (props.type === 0) {
        await axios
          .get(`${process.env.NEXT_PUBLIC_API_URL}/products`)
          .then((response) => setFilteredProducts(response.data));
      }

      if (props.type === 1) {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/products/category/electronics`
          )
          .then((response) => setFilteredProducts(response.data));
      }

      if (props.type === 2) {
        await axios
          .get(
            `${process.env.NEXT_PUBLIC_API_URL}/products/category/peripherals`
          )
          .then((response) => setFilteredProducts(response.data));
      }

      if (search !== "") {
        setFilteredProducts(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFilteredProducts();
  }, [filteredProducts]);

  return (
    <div className="container mx-auto grid grid-cols-4 justify-items-center gap-8 py-10">
      {filteredProducts?.map((product: Product) => (
        <ProductsCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default FilteredProducts;
