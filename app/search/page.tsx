"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../types/products";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Suspense } from 'react'
import ProductCard from "../components/ProductCard/ProductCard";

const SearchResults = async () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`)
  const products = await res.json();

  return (
    <>
      <Header/>
        
      <Suspense>
        <div>
          <Menu/>
          <div>
            <h1>Resultados da busca: {query}</h1>

            {products.length > 0 ? (
              <div className="">
                {products.map((product: products) => (
                  <ProductCard
                    key={`product-${product.id}`}
                    id={product.id}
                    name={product.name}
                    photo={product.photo}
                    price={product.price}
                    des={product.des}
                  />
                ))}
              </div>
            ) : (
              <p>Nenhum produto encontrado.</p>
            )}
          </div>
        </div>
      </Suspense>
    </>
  );
};

export default SearchResults;