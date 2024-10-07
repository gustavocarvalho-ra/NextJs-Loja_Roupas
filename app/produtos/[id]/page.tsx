"use client"

import Header from "@/app/components/Header";

import pro from "../../data/pro.json"
import { Main } from "../styles";

import Image from 'next/image';
import Link from "next/link"
import ImageZoom from "@/app/components/ZoomImage";

interface Params {
  id: string
};

const ProdutoDetalhes: React.FC<{ params: Params}> = ({ params }) => {
  const { id } = params;

  const produto = pro?.find(item => item.id.toString() === id);

  if (!produto) 
    return (
      <div>
        <h1>Produto não encontrado :(</h1>
      </div>
    )

  return (
    <>
      <Header />
      <Main>
        <div className="deta">
          <div className="imag">
            <Image src={produto.photo} alt="Imagem do Produto" width={80} height={95}/>
            <Image src={produto.photo} alt="Imagem do Produto" width={550} height={580}/>
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
                  <span>20%off</span>
                </div>
                <p>por:</p>
                <h2>R$ {produto.price}</h2>
              </div>
              <div className="add">
                <button>Adicionar ao carrinho</button>
              </div>
            </div>
          </div>
          {/* <ImageZoom src={produto.photo} zoomImageSrc="/path/to/your/zoom-image.jpg" zoomFactor={2} width={500} height={500} /> */}
        </div>
      </Main>
    </>
  );
};

export default ProdutoDetalhes;