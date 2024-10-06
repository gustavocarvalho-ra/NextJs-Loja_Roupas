"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const fetchProducts = async (q: string) => {
  const response = await fetch("/app/data/pro.json");
  const products = await response.json();
  return products.filter((product: any) =>
    product.name.toLowerCase().includes(q.toLowerCase())
  );
};

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    const searchProducts = async () => {
      const results = await fetchProducts(query);
      setProducts(results);
    };

    if (query) {
      searchProducts();
    }
  }, [query]);

  return 
}