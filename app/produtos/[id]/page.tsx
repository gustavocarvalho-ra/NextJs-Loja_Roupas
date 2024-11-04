"use client"

import Header from "@/app/components/Header";

import pro from "../../data/pro.json"
import { Main, Body, Off } from "../styles";

import Image from 'next/image';
import Link from "next/link"
import ImageZoom from "@/app/components/ZoomImage";
import ItensCard from './../../components/ItensCard/index';
import { useCart, useShoppingCart } from "../../contexts/useShoppingCart";
import { products } from '@/app/types/products';
import { useState,useEffect } from "react";


interface Params {
  id: string
};

const ProdutoDetalhes: React.FC<{ params: Params}> = ({ params }) => {
  const { id } = params;

  const produto = pro?.find(item => item.id.toString() === id);

  if (!produto) 
    return (
      <div>
        <h1>Produto não encontrado :/</h1>
      </div>
    )

  //TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--

  // const { listShoppingCart } = useShoppingCart()

  const [listShoppingCart, setListShoppingCart] = useState<products[]> ([]);

  useEffect(() => {
    const listShoppingCartStorage = localStorage.getItem(
      "listShoppingCartStorage",
    );
    if (listShoppingCartStorage) {
      setListShoppingCart(JSON.parse(listShoppingCartStorage));
    }
  }, []);

  const handleAddProductShopping = (product: products) => {
    const existingProductIndex = listShoppingCart.findIndex(
      (item) => item.id === product.id,
    );
  
    let updateListShoppingCart;

    if (existingProductIndex === -1) {
      updateListShoppingCart = [
        ...listShoppingCart,
        { ...product, quantity: 1 }
      ];
      console.log("Produto adicionado ao carrinho.", product);
    } else {
      updateListShoppingCart = listShoppingCart.map((item, index) =>
        index === existingProductIndex ? {...item, quantity: item.quantity + 1} : item);
      console.log("Quantidade incrementada para o produto: ", product);
    };

    setListShoppingCart(updateListShoppingCart);
    localStorage.setItem(
      "listShoppingCartStorage",
      JSON.stringify(updateListShoppingCart),
    );
  };

  //TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--TEST--

  let test = useCart;

  return (
    <>
      <Header />
      <Body>

        <Main>
          <div className="deta">
            <div className="imag">
              <Image src={produto.photo} className="mini" alt="Imagem do produto minimizado" width={80} height={95}/>
              <Image src={produto.photo} alt="Imagem do produto" width={550} height={580}/>
            </div>
            <div className="stat">
              <div className="lin">
                <h4><Link href="/">Página inicial</Link> - {produto.name}</h4>
              </div>
              <div className="details">
                <h1>{produto.name}</h1>
                <div className="pri">
                  <p>De:</p>
                  <div style={{display: "flex", alignItems: "center"}}>
                    <h3>R$ {Math.floor(produto.price * produto.des + produto.price)},00 </h3>
                    <Off>20%off</Off>
                  </div>
                  <p>por:</p>
                  <h2>R$ {produto.price}</h2>
                </div>
                <div className="add">
                  {/* <button onClick={add}>Adicionar ao carrinho</button> */}
                </div>
              </div>
            </div>
            {/* <ImageZoom src={produto.photo} zoomImageSrc="/path/to/your/zoom-image.jpg" zoomFactor={2} width={500} height={500} /> */}
          </div>
        <ItensCard />
        </Main>
      </Body>
    </>
  );
};

export default ProdutoDetalhes;