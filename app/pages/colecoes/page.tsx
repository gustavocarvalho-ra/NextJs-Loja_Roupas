"use client"

import Link from "next/link";

import Header from "@/app/components/Header"

import { Cate } from "./styles";


export default function Test () {
  return (
    <>
      <Header/>
      
      <Cate>
      <div className="section">
        <h1>Coleções</h1>
        <div className="cards">
          <Link className="clas" href="/pages/jaquetas">Jaquetas</Link>
          <Link className="cami" href="/pages/camisa">Camisetas</Link>
          <Link className="cas" href="/pages/calcas">Calças</Link>
          <Link className="tes" href="/pages/tenis"></Link>
          <a href="">Bonés e toucas</a>
          <a href="">Meias</a>
          <a href="">Mochilas</a>
          <a href="">Óculos</a>
          <a href="">Bags</a>
        </div>
      </div>
      </Cate>
    </>
  )
}