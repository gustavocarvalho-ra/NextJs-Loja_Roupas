"use client"

import Header from "@/app/components/Header";

import pro from "../../data/pro.json"
import { Main, Body, Off } from "../styles";

import Image from 'next/image';
import Link from "next/link"
import ImageZoom from "@/app/components/ZoomImage";
import ItensCard from './../../components/ItensCard/index';
import { useShoppingCart } from "../../contexts/useShoppingCart";
import { products } from '@/app/types/products';


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

    const {
      listShoppingCart,
      handleAddProductShopping,
      handleRemoveProductShopping,
      handleDecreaseQuantity,
      handleIncreaseQuantity,
    } = useShoppingCart();

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
                  <button onClick={() => handleAddProductShopping(produto as products)}>Adicionar ao carrinho</button>
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