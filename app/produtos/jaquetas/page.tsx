"use client"

import { Container } from "../styles";

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import Image from "next/image";
import Link from 'next/link';
import ProductCard from "@/app/components/ProductCard/ProductCard";


export default function Test () {
  const produtos = pro.filter((item) => item.type === "jaqueta");

  return (
    <>
      <Header/>
      
      <Container>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Jaquetas</h1>
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