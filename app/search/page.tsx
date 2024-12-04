"use client";

import Header from "../components/Header";
import Menu from "../components/Menu";
import ProductCard from "../components/ProductCard/ProductCard";

import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'

import { products } from "../types/products";

import "./style.css"

const SearchResults = async () => {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  const res = await fetch(`/api/products?q=${encodeURIComponent(query)}`)
  const products = await res.json();

  return (
    <>
      <Header/>
        
        <div className="container">
          <Menu/>
          <div className="cards">
            <div className="title">
              <h1 className="ti">Resultados da busca: {query}</h1>
            </div>

            {products.length > 0 ? (
              <div className="window">
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
    </>
  );
};

export default SearchResults;