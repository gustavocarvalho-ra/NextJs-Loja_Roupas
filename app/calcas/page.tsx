"use client"

import { Car } from "./styles";

import pro from "../data/pro.json"
import Header from "@/app/components/Header"

import Image from "next/image";


export default function Test () {
  let produtos = [...pro];

  return (
    <>
    <Header/>
    <Car>
      <div className="cards">
        {produtos.map(item => (
          // eslint-disable-next-line react/jsx-key
          <div className="card">
            <h1 key={item.name}>{item.name}</h1>
            <h2 key={item.preco}>{item.preco}</h2>
            <Image src={item.imagem} alt="test" width={100} height={100} style={{background: "image"}}/>
          </div>
        ))}
      </div>
    </Car>

    </>
  )
}
