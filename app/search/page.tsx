"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../types/products";
import Header from "../components/Header";
import Menu from "../components/Menu";
import { Suspense } from 'react'

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
              <ul>
                {products.map((product: products) => (
                  <li key={product.id}>
                    {product.name} - R$ {product.price}
                  </li>
                ))}
              </ul>
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