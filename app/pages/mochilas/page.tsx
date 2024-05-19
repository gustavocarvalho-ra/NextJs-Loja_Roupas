"use client"

import { Moc } from "./styles";

import pro from "../../data/pro.json"
import Header from "@/app/components/Header"
import Menu from "../../components/Menu";

import { products } from "@/app/types/products";

import Image from "next/image";

export default function Test () {
  let produtos = [...pro];
  let products = produtos

  // var desconto = produtos.price * .3

  return (
    <>
      <Header/>
      
      <Moc>
        <Menu/>
        
        <div className="cards">
          <div style={{width: "100%", height: "50px", marginBottom: "1em"}}>
            <h1 className="ti">Mochilas</h1>
          </div>

          {produtos
          .filter(item => item.type === "mochila")
          .map(item => (
            // eslint-disable-next-line react/jsx-key
            <div className="card">
                <button className="btd">20% off</button>
              <div className="ft">
                <Image src={item.photo}  alt="test" sizes="100vh" width={180} height={210} style={{borderRadius: "8px", marginTop: "4px"}}/>
              </div>
              <div className="info">
                <h1 key={item.name}>{item.name}</h1>
                <div className="nis" style={{display: "flex"}}>
                  <p key={item.price}>R$ {item.price}</p>
                  <span id="var" key={item.des}>{item.price * item.des + item.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Moc>
    </>
  )
}