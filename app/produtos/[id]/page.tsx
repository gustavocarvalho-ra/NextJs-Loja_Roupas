"use client"

import Header from "@/app/components/Header";

import { produc } from "../../types/prod"
import pro from "../../data/pro.json"
import { Main } from "../styles";

import Image from 'next/image';
import Link from "next/link"

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
              <h4><Link href="/">Página príncipal</Link> - {produto.name}</h4>
            </div>
            <div className="details">
              <h1>{produto.name}</h1>
              <h1>R$: {produto.price}</h1>
              <h1>{produto.id}</h1>
              <h1>{produto.type}</h1>
            </div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default ProdutoDetalhes;