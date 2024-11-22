"use client"

import { Container } from "../styles";

import Header from "@/app/components/Header"
import Menu from "../../components/Menu";
import ProductCard from "@/app/components/ProductCard/ProductCard";

import pro from "../../data/pro.json"

export default function Test () {
  const produtos = pro.filter((item) => item.type === "camisa");

  return (
    <>
      <Header/>
      
      <Container>
        <Menu/>
        
        <div className="cards">
          <div className="title">
            <h1 className="ti">Camisas</h1>
          </div>

          {produtos.map((item) => (
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              photo={item.photo}
              price={item.price}
              des={item.des}
            />
          ))}
        </div>
      </Container>
    </>
  )
}