"use client"

import { Car } from "./styles";

import pro from "../data/pro.json"
import Header from "@/app/components/Header"


export default function Test () {
  let produtos = [...pro];

  return (
    <>
    <Header/>
    <Car>
      <div className="cards">
        {produtos.map(item => (
          // eslint-disable-next-line react/jsx-key
          <div>
            <h1 key={item.nome}>{item.nome}</h1>
            <h2 key={item.preco}>{item.preco}</h2>
          </div>
        ))}
      </div>
    </Car>

    </>
  )
}
