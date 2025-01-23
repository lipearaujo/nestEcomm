"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export function useGetPurchasedItems(customerId: string) {
  const [purchasedItems, setPurchasedItems] = useState([]);

  const fetchProducts = async () => {
    const purchasedItems = await axios.get(
      `http://localhost:3001/products/purchasedItems/${customerId}`
    );
    setPurchasedItems(purchasedItems.data.PurchasedItems);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return { purchasedItems, fetchProducts };
}
